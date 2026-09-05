"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

/**
 * A cursor-following preview card, in the spirit of the Framer
 * HoverImageReveal component but driven by real link targets: site
 * screenshots for pages, an icon + label card for things that have no
 * meaningful screenshot (mailto:, or hosts that block logged-out capture).
 *
 * One card is shared by every link on the page — links only publish which
 * preview to show, so hovering twenty links still costs one motion subtree.
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

const CARD_W = 280;
const CARD_H = 176;

/**
 * Springs are deliberately loose so the card trails the cursor and overshoots
 * a little on direction changes — that lag is what the tilt is derived from.
 */
const FOLLOW_SPRING = { stiffness: 260, damping: 26, mass: 0.7 };
/** Rotation lags further behind again, so the card banks into the turn. */
const TILT_SPRING = { stiffness: 150, damping: 18, mass: 0.6 };

interface PreviewCtx {
  show: (content: PreviewContent) => void;
  hide: () => void;
  /** Null until the provider has mounted; links stay inert without it. */
  active: boolean;
}

const HoverPreviewContext = createContext<PreviewCtx | null>(null);

/**
 * Coarse pointers get no preview at all — there is no hover to speak of, and
 * a card chasing a tap is noise. Also respects reduced-motion.
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

export function HoverPreviewProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const enabled = useSupportsHover();
  const [content, setContent] = useState<PreviewContent | null>(null);

  // Raw pointer position; the springs below chase these.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, FOLLOW_SPRING);
  const springY = useSpring(y, FOLLOW_SPRING);

  /*
   * Tilt comes from horizontal lag: how far the spring is behind the cursor.
   * Moving right leaves the card to the left of the pointer (negative delta)
   * so we negate to bank the leading edge upward. Clamped to keep fast flicks
   * from spinning the card.
   */
  const lag = useTransform<number, number>(
    [x, springX],
    ([cursor, trailing]) => {
      const delta = cursor - trailing;
      return Math.max(-28, Math.min(28, delta * 0.55));
    }
  );
  const rotate = useSpring(lag, TILT_SPRING);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, x, y]);

  const show = useCallback(
    (next: PreviewContent) => {
      if (!enabled) return;
      setContent(next);
    },
    [enabled]
  );

  const hide = useCallback(() => setContent(null), []);

  /*
   * On the first reveal the springs still hold the previous link's position,
   * which would send the card flying across the page. Snap them to the cursor
   * before it becomes visible.
   */
  const wasVisible = useRef(false);
  useEffect(() => {
    const visible = content !== null;
    if (visible && !wasVisible.current) {
      springX.jump(x.get());
      springY.jump(y.get());
      rotate.jump(0);
    }
    wasVisible.current = visible;
  }, [content, springX, springY, rotate, x, y]);

  const ctx = useMemo(
    () => ({ show, hide, active: enabled }),
    [show, hide, enabled]
  );

  return (
    <HoverPreviewContext.Provider value={ctx}>
      {children}
      {enabled && (
        <PreviewCard
          content={content}
          x={springX}
          y={springY}
          rotate={rotate}
        />
      )}
    </HoverPreviewContext.Provider>
  );
}

function PreviewCard({
  content,
  x,
  y,
  rotate,
}: {
  content: PreviewContent | null;
  x: MotionValue<number>;
  y: MotionValue<number>;
  rotate: MotionValue<number>;
}) {
  /*
   * Keep the card inside the viewport: it sits above-right of the cursor by
   * default, and flips to the other side near an edge rather than clipping.
   */
  const left = useTransform(x, (v) => {
    const ideal = v + 24;
    const maxLeft = window.innerWidth - CARD_W - 12;
    return Math.max(12, Math.min(ideal, maxLeft));
  });

  const top = useTransform(y, (v) => {
    const ideal = v - CARD_H - 20;
    // Not enough room above — drop it below the cursor instead.
    return ideal < 12 ? Math.min(v + 28, window.innerHeight - CARD_H - 12) : ideal;
  });

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      <AnimatePresence>
        {content && (
          <motion.div
            key={content.src ?? content.label ?? "preview"}
            style={{
              left,
              top,
              rotate,
              width: CARD_W,
              height: CARD_H,
            }}
            className="absolute origin-center overflow-hidden rounded-lg border border-black/10 bg-white shadow-2xl shadow-black/25 dark:border-white/15 dark:bg-[#0d0d0d] dark:shadow-black/60"
            initial={{ opacity: 0, scale: 0.86, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 6 }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 32,
              mass: 0.6,
            }}
          >
            {content.kind === "image" && content.src ? (
              <Image
                src={content.src}
                alt=""
                width={CARD_W * 2}
                height={CARD_H * 2}
                // Top-anchored so the card shows the masthead, not the middle.
                className="h-full w-full object-cover object-top"
                priority={false}
              />
            ) : (
              <IconCard content={content} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function IconCard({ content }: { content: PreviewContent }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-50 to-gray-200 px-5 text-center dark:from-[#161616] dark:to-[#0a0a0a]">
      <div className="text-link [&>svg]:h-7 [&>svg]:w-7">{content.icon}</div>
      <p className="text-sm font-semibold text-black dark:text-white">
        {content.label}
      </p>
      {content.sublabel && (
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {content.sublabel}
        </p>
      )}
    </div>
  );
}

/**
 * Wraps an anchor so hovering it reveals `preview`. Renders a plain <a> and
 * forwards everything, so it is a drop-in for the links already in the page.
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
        ctx?.show(preview);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        ctx?.hide();
        onMouseLeave?.(e);
      }}
      // Keyboard users never trigger the card, but they must not get a stale
      // one either if focus moves off a hovered link.
      onBlur={() => ctx?.hide()}
    >
      {children}
    </a>
  );
}

export default HoverPreviewProvider;
