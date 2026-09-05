"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

/**
 * A tooltip-style hover preview: a speech bubble that opens directly above the
 * hovered link, with a tail pointing down at it.
 *
 * Previews are either a site screenshot (wide card) or, for links with no
 * meaningful screenshot — mailto:, and hosts that block logged-out capture —
 * a square icon card.
 *
 * One bubble is shared by every link on the page; links only publish which
 * preview to show and where they are, so twenty links cost one motion subtree.
 */

export type PreviewKind = "image" | "icon";

export interface PreviewContent {
  kind: PreviewKind;
  /** Image previews: path under /public. */
  src?: string;
  /** Icon previews: the glyph, rendered large. */
  icon?: React.ReactNode;
  /** Headline on an icon card, e.g. "compose an email". */
  label?: string;
  /** Muted second line, e.g. the address itself. */
  sublabel?: string;
}

/** Screenshots keep a 16:10 frame; icon cards are square. */
const IMAGE_W = 260;
const IMAGE_H = 163;
const ICON_SIZE = 168;

/** Gap between the tail tip and the top of the link. */
const TAIL_GAP = 10;
const TAIL_W = 12;
/** Keeps the bubble off the viewport edges. */
const EDGE_PAD = 12;

const sizeOf = (c: PreviewContent) =>
  c.kind === "icon"
    ? { w: ICON_SIZE, h: ICON_SIZE }
    : { w: IMAGE_W, h: IMAGE_H };

/** Where the bubble sits, resolved from the link's rect at hover time. */
interface Anchor {
  /** Bubble's top-left, in viewport coords. */
  left: number;
  top: number;
  /** Tail's horizontal centre, relative to the bubble's left edge. */
  tailX: number;
  /** Tail below the bubble (normal) or above it (bubble flipped under). */
  flipped: boolean;
}

interface PreviewCtx {
  show: (content: PreviewContent, el: HTMLElement) => void;
  hide: () => void;
  active: boolean;
}

const HoverPreviewContext = createContext<PreviewCtx | null>(null);

/**
 * Coarse pointers get no preview — there is no hover to speak of. Also
 * respects reduced-motion.
 */
function useSupportsHover() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const hover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => setOk(hover.matches && !calm.matches);
    sync();

    hover.addEventListener("change", sync);
    calm.addEventListener("change", sync);
    return () => {
      hover.removeEventListener("change", sync);
      calm.removeEventListener("change", sync);
    };
  }, []);

  return ok;
}

/**
 * Positions the bubble over a link: centred on it, above it by default,
 * clamped to the viewport with the tail sliding to stay on the link.
 */
function anchorTo(el: HTMLElement, content: PreviewContent): Anchor {
  /*
   * An inline link that wraps across lines has a tall bounding rect spanning
   * both, which would centre the bubble over the gap. Use the first client
   * rect — the fragment on the first line — so it points at real text.
   */
  const rects = el.getClientRects();
  const r = rects.length > 0 ? rects[0] : el.getBoundingClientRect();
  const { w, h } = sizeOf(content);
  const centre = r.left + r.width / 2;

  const left = Math.max(
    EDGE_PAD,
    Math.min(centre - w / 2, window.innerWidth - w - EDGE_PAD)
  );

  // Prefer above; drop below only when there isn't room up there.
  const above = r.top - h - TAIL_GAP;
  const flipped = above < EDGE_PAD;
  const top = flipped ? r.bottom + TAIL_GAP : above;

  /*
   * The bubble may have been clamped away from the link's centre, so the tail
   * tracks the link independently — kept inside the bubble's rounded corners.
   */
  const tailX = Math.max(
    TAIL_W,
    Math.min(centre - left, w - TAIL_W)
  );

  return { left, top, tailX, flipped };
}

export function HoverPreviewProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const enabled = useSupportsHover();
  const [content, setContent] = useState<PreviewContent | null>(null);
  const [anchor, setAnchor] = useState<Anchor | null>(null);

  const show = useCallback(
    (next: PreviewContent, el: HTMLElement) => {
      if (!enabled) return;
      setAnchor(anchorTo(el, next));
      setContent(next);
    },
    [enabled]
  );

  const hide = useCallback(() => setContent(null), []);

  /*
   * The bubble is fixed-positioned against a rect measured at hover time, so
   * scrolling or resizing would leave it stranded. Cheaper to dismiss it than
   * to track the link.
   */
  useEffect(() => {
    if (!content) return;

    window.addEventListener("scroll", hide, { passive: true });
    window.addEventListener("resize", hide);
    return () => {
      window.removeEventListener("scroll", hide);
      window.removeEventListener("resize", hide);
    };
  }, [content, hide]);

  const ctx = useMemo(
    () => ({ show, hide, active: enabled }),
    [show, hide, enabled]
  );

  return (
    <HoverPreviewContext.Provider value={ctx}>
      {children}
      {enabled && <PreviewBubble content={content} anchor={anchor} />}
    </HoverPreviewContext.Provider>
  );
}

function PreviewBubble({
  content,
  anchor,
}: {
  content: PreviewContent | null;
  anchor: Anchor | null;
}) {
  const size = content ? sizeOf(content) : null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-50">
      <AnimatePresence>
        {content && anchor && size && (
          <motion.div
            key={content.src ?? content.label ?? "preview"}
            style={{
              left: anchor.left,
              top: anchor.top,
              width: size.w,
            }}
            className="absolute"
            /*
             * Settles rather than bounces: a short tween on the way in, and a
             * small rise from the link it belongs to.
             */
            initial={{ opacity: 0, y: anchor.flipped ? -6 : 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: anchor.flipped ? -4 : 4, scale: 0.99 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-xl border border-black/10 bg-white shadow-xl shadow-black/15 dark:border-white/15 dark:bg-[#0d0d0d] dark:shadow-black/50">
              <div className="overflow-hidden rounded-xl">
                {content.kind === "image" && content.src ? (
                  <Image
                    src={content.src}
                    alt=""
                    width={IMAGE_W * 2}
                    height={IMAGE_H * 2}
                    // Top-anchored so the card shows the masthead.
                    className="block w-full object-cover object-top"
                    style={{ height: size.h }}
                    priority={false}
                  />
                ) : (
                  <IconCard content={content} size={size.h} />
                )}
              </div>
              <Tail
                tailX={anchor.tailX}
                flipped={anchor.flipped}
                solid={
                  content.kind === "icon"
                    ? "bg-gray-200 dark:bg-[#0a0a0a]"
                    : "bg-white dark:bg-[#0d0d0d]"
                }
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * The speech-bubble tail. A rotated square rather than a border triangle, so
 * it inherits the bubble's background and 1px border in both themes; the edge
 * facing the bubble is covered by the bubble's own body.
 */
function Tail({
  tailX,
  flipped,
  solid,
}: {
  tailX: number;
  flipped: boolean;
  /** Matches the card's own base so the join is seamless. */
  solid: string;
}) {
  return (
    <span
      className={
        "absolute h-3 w-3 rotate-45 border-black/10 dark:border-white/15 " + solid
      }
      style={{
        left: tailX,
        marginLeft: -6,
        ...(flipped
          ? { top: -6, borderLeftWidth: 1, borderTopWidth: 1 }
          : { bottom: -6, borderRightWidth: 1, borderBottomWidth: 1 }),
      }}
    />
  );
}

function IconCard({
  content,
  size,
}: {
  content: PreviewContent;
  size: number;
}) {
  return (
    <div
      style={{ height: size }}
      className="flex w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-50 to-gray-200 px-4 text-center dark:from-[#161616] dark:to-[#0a0a0a]"
    >
      <div className="text-link [&>svg]:h-7 [&>svg]:w-7">{content.icon}</div>
      <p className="text-sm font-semibold leading-tight text-black dark:text-white">
        {content.label}
      </p>
      {content.sublabel && (
        <p className="w-full break-words text-[11px] leading-tight text-gray-500 dark:text-gray-400">
          {content.sublabel}
        </p>
      )}
    </div>
  );
}

/**
 * Wraps an anchor so hovering it opens `preview` above it. Renders a plain <a>
 * and forwards everything, so it is a drop-in for the links already in place.
 */
export function HoverPreviewLink({
  preview,
  children,
  onMouseEnter,
  onMouseLeave,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { preview: PreviewContent }) {
  const ctx = useContext(HoverPreviewContext);

  return (
    <a
      {...props}
      onMouseEnter={(e) => {
        ctx?.show(preview, e.currentTarget);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        ctx?.hide();
        onMouseLeave?.(e);
      }}
      onBlur={() => ctx?.hide()}
    >
      {children}
    </a>
  );
}

export default HoverPreviewProvider;
