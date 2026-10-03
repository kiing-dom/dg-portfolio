/**
 * The canonical public origin. Canonicals, JSON-LD, the sitemap, robots and
 * llms.txt all read it from here. A constant on purpose: a deploy with a wrong
 * or empty env var must never be able to canonicalise every page to the wrong
 * host.
 */
export const SITE_URL = "https://dominion-gbadamosi.xyz";

export const SITE_NAME = "Dominion Gbadamosi";

export const SITE_TITLE = "Dominion Gbadamosi - Software Engineer & Founder";

export const SITE_DESCRIPTION =
  "Dominion Gbadamosi is a software engineer based in Ireland, building Luttie (browser color grading) and Tau (timelapse recorder). Open to backend and full stack roles.";

export const EMAIL = "dom1gbadamosi@gmail.com";

export const TWITTER_HANDLE = "@_dngi";

/**
 * A copy of the resume kept in /public. The source of truth is the Google Drive
 * file; when that changes, download it again over this one.
 *
 * It contains a phone number, so next.config.mjs serves it with a noindex
 * header and it is deliberately left out of the sitemap and llms.txt. If this
 * path changes, change it there too.
 */
export const RESUME_PATH = "/assets/documents/dominion-gbadamosi-resume.pdf";

/** Profiles that are the same person, for `sameAs` and llms.txt. */
export const PROFILES = {
  github: "https://github.com/kiing-dom",
  twitter: "https://twitter.com/_dngi",
  linkedin: "https://www.linkedin.com/in/dominion-gbadamosi",
  medium: "https://www.medium.com/@dngi267",
  youtube: "https://youtube.com/@267dngi",
} as const;
