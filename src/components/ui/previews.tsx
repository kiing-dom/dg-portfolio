import React from "react";
import type { PreviewContent } from "@/components/ui/HoverPreview";

/**
 * Hover previews, keyed by the link they belong to.
 *
 * Screenshots live in /public/assets/images/previews and are captured at
 * 1280x800. To refresh one, screenshot the landing page at that size and
 * overwrite the file — no code change needed.
 *
 * Sites that block logged-out screenshotting (LinkedIn's signup wall,
 * Medium's bot check) get an icon card instead of a broken-looking capture.
 */

const shot = (name: string): PreviewContent => ({
  kind: "image",
  src: `/assets/images/previews/${name}.png`,
});

const MailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 7 8.2 5.6a1.4 1.4 0 0 0 1.6 0L21 7" />
  </svg>
);

const LinkedInIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95C21.6 8.75 23 11 23 14.3V21h-4v-5.9c0-1.4-.03-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1V21h-4V9Z" />
  </svg>
);

const MediumIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12ZM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42ZM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12Z" />
  </svg>
);

const BookIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19v15H5.5A1.5 1.5 0 0 0 4 19.5v-15Z" />
    <path d="M4 19.5A1.5 1.5 0 0 1 5.5 18H19v3H5.5A1.5 1.5 0 0 1 4 19.5Z" />
  </svg>
);

const XIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.02 4.13H5.06l12.02 15.64Z" />
  </svg>
);

export const previews = {
  email: {
    kind: "icon",
    icon: MailIcon,
    label: "compose an email",
    sublabel: "dom1gbadamosi@gmail.com",
  },
  twitter: {
    kind: "icon",
    icon: XIcon,
    label: "@_dngi",
    sublabel: "on x / twitter",
  },
  linkedin: {
    kind: "icon",
    icon: LinkedInIcon,
    label: "dominion gbadamosi",
    sublabel: "on linkedin",
  },
  medium: {
    kind: "icon",
    icon: MediumIcon,
    label: "@dngi267",
    sublabel: "writing on medium",
  },
  bible: {
    kind: "icon",
    icon: BookIcon,
    label: "Proverbs 13:4",
    sublabel: "biblegateway - niv",
  },
  github: shot("github"),
  luttie: shot("luttie"),
  tau: shot("tau"),
  fuzc: shot("fuzc"),
} satisfies Record<string, PreviewContent>;
