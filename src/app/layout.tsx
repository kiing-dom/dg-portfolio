import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/components/ThemeProvider";
import { HoverPreviewProvider } from "@/components/ui/HoverPreview";
import { DEFAULT_OG_IMAGE, PERSON_ID, ldJson } from "@/lib/seo";
import {
  EMAIL,
  PROFILES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  TWITTER_HANDLE,
} from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Dominion Gbadamosi",
    "Software Engineer",
    "Software Engineer Ireland",
    "Full Stack Developer",
    "Luttie",
    "Tau",
    "dngi",
    "kiing dom",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  /*
   * No default `alternates.canonical` or `openGraph.url` here on purpose. Next
   * inherits both down the whole tree, so a root default would point every
   * page that forgot its own at the homepage. Pages set them through
   * pageMetadata() in lib/seo.ts.
   */
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: TWITTER_HANDLE,
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/** Referenced by `@id` from the pages that are about, or written by, this person. */
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: SITE_NAME,
  alternateName: ["dom", "dngi", "kiing dom"],
  url: SITE_URL,
  image: `${SITE_URL}/assets/images/hero/gradphoto.jpg`,
  email: `mailto:${EMAIL}`,
  sameAs: Object.values(PROFILES),
  jobTitle: "Software Engineer",
  address: { "@type": "PostalAddress", addressCountry: "IE" },
  worksFor: {
    "@type": "Organization",
    name: "DNGI",
    url: "https://github.com/iwaju-labs",
  },
  knowsAbout: [
    "Software Engineering",
    "Full Stack Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Java",
    "Angular",
    "Rust",
    "Product Development",
  ],
  description: SITE_DESCRIPTION,
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /*
   * Runs before first paint so the theme class is on <html> by the time
   * anything renders. Without it, ThemeProvider's useEffect applies the class
   * after paint and dark-mode users get a white flash. Keep the storage key in
   * sync with ThemeProvider.
   */
  const themeScript = `(function(){try{var t=localStorage.getItem('portfolio-theme')||'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.add(d?'dark':'light');}catch(e){}})();`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJson(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJson(websiteLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <GoogleAnalytics />
          <HoverPreviewProvider>{children}</HoverPreviewProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
