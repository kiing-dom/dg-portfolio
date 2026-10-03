import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

type CardInput = {
  /** Small line above the title, e.g. "blog". */
  eyebrow?: string;
  title: string;
  description?: string;
};

const clip = (text: string, max: number) =>
  text.length > max ? text.slice(0, max - 1).trimEnd() + "…" : text;

/**
 * The social card every page shares: the favicon's red square, a title and a
 * muted line under it. Flexbox only, because that is all the renderer supports.
 */
export function ogCard({ eyebrow, title, description }: CardInput) {
  return new ImageResponse(
    (
      <div
        style={{
          width: OG_SIZE.width,
          height: OG_SIZE.height,
          background: "#070707",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 11,
              background: "#97011a",
            }}
          />
          <span style={{ color: "#ffffff", fontSize: 26 }}>
            dominion gbadamosi
          </span>
          {eyebrow && (
            <span style={{ color: "#6b7280", fontSize: 26 }}>/ {eyebrow}</span>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: title.length > 50 ? 56 : 68,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            {clip(title, 90)}
          </div>
          {description && (
            <div style={{ color: "#9ca3af", fontSize: 28, lineHeight: 1.4 }}>
              {clip(description, 130)}
            </div>
          )}
        </div>

        <span style={{ color: "#6b7280", fontSize: 24 }}>
          dominion-gbadamosi.xyz
        </span>
      </div>
    ),
    OG_SIZE
  );
}
