import type { NextRequest } from "next/server";
import { ogCard } from "@/lib/ogCard";

/*
 * Edge on purpose. Next 14's Node build of the image renderer resolves its
 * font with path.join on a file:// URL, which throws "Invalid URL" on Windows
 * and takes `next build` down with it. The edge build has no such problem,
 * and it has no filesystem either, which is why the text arrives as query
 * parameters (see ogImageFor in lib/seo.ts) instead of being read from a post.
 */
export const runtime = "edge";

/** Served at /og: the sitewide social card, or a post's when given a title. */
export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title");

  if (!title) {
    return ogCard({
      title: "Dominion Gbadamosi",
      description: "Software engineer based in Ireland. Building Luttie and Tau.",
    });
  }

  return ogCard({
    eyebrow: searchParams.get("eyebrow") ?? undefined,
    title,
    description: searchParams.get("description") ?? undefined,
  });
}
