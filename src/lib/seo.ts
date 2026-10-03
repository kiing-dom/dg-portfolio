import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from "@/lib/site";

/** The sitewide social card, rendered by app/og/route.tsx. */
export const DEFAULT_OG_IMAGE = {
  url: "/og",
  width: 1200,
  height: 630,
  alt: "Dominion Gbadamosi - Software Engineer",
} as const;

/** A card with its own text, for pages that want more than the sitewide one. */
export function ogImageFor(input: {
  title: string;
  description?: string;
  eyebrow?: string;
}) {
  const params = new URLSearchParams({ title: input.title });
  if (input.description) params.set("description", input.description);
  if (input.eyebrow) params.set("eyebrow", input.eyebrow);

  return {
    url: `/og?${params.toString()}`,
    width: 1200,
    height: 630,
    alt: input.title,
  };
}

/** The Person node declared in the root layout; other JSON-LD points at it. */
export const PERSON_ID = `${SITE_URL}/#person`;

/** Absolute canonical for a path, so og:url and canonical can't drift apart. */
export function canonicalFor(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

type PageInput = {
  /** Path only, e.g. "/blog". Becomes both og:url and the canonical. */
  path: string;
  /** Short title; the root layout's template appends the site name. */
  title: string;
  description: string;
  /** Use `title` as the whole <title>, skipping the template. */
  absoluteTitle?: boolean;
};

/**
 * Everything a static page needs: title, description, canonical, Open Graph
 * and Twitter.
 *
 * Next replaces `openGraph` and `twitter` wholesale rather than deep-merging
 * them, so a page that declares only a title and description silently drops
 * the root layout's image, type and site name. Going through this helper
 * makes that impossible. Blog posts build their metadata by hand instead,
 * because they are articles and carry their own card (see ogImageFor).
 */
export function pageMetadata({
  path,
  title,
  description,
  absoluteTitle,
}: PageInput): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} - ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: canonicalFor(path) },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      url: canonicalFor(path),
      title: socialTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      creator: TWITTER_HANDLE,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

/** Serialises JSON-LD for a <script> tag; escapes "<" so content can't close it. */
export function ldJson(data: object): string {
  return JSON.stringify(data).replaceAll("<", "\\u003c");
}

export function breadcrumbLd(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonicalFor(item.path),
    })),
  };
}
