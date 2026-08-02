import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://dominion-gbadamosi.xyz"),
  title: {
    default: "Dominion Gbadamosi - Software Engineer & Founder",
    template: "%s | Dominion Gbadamosi"
  },
  description: "Software Engineer, Founder at Iwaju Labs, and solo developer building profitable products. Documenting the journey from €0 → €10k MRR.",
  keywords: [
    "Dominion Gbadamosi",
    "Software Engineer",
    "Iwaju Labs",
    "Solo Developer",
    "brandalyze",
    "Portfolio",
    "dngi",
    "dom"
  ],
  authors: [{ name: "Dominion Gbadamosi", url: "https://dominion-gbadamosi.xyz" }],
  creator: "Dominion Gbadamosi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dominion-gbadamosi.xyz",
    siteName: "Dominion Gbadamosi",
    title: "Dominion Gbadamosi - Software Engineer & Founder",
    description: "Software Engineer, Founder at Iwaju Labs, and solo developer building profitable products. Documenting the journey from €0 → €10k MRR.",
    images: [
      {
        url: "/assets/images/hero/gradphoto.jpg",
        width: 1200,
        height: 630,
        alt: "Dominion Gbadamosi - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominion Gbadamosi - Software Engineer & Founder",
    description: "Software Engineer, Founder at Iwaju Labs, and solo developer building profitable products.",
    creator: "@_dngi",
    images: ["/assets/images/hero/gradphoto.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dominion Gbadamosi",
    alternateName: ["Dom", "dngi", "Kiing Dom"],
    url: "https://dominion-gbadamosi.xyz",
    image: "https://dominion-gbadamosi.xyz/assets/images/hero/gradphoto.jpg",
    sameAs: [
      "https://github.com/dngi-dev",
      "https://twitter.com/_dngi",
      "https://youtube.com/@267dngi",
      "https://linkedin.com/in/dominion-gbadamosi"
    ],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Iwaju Labs",
      url: "https://github.com/iwaju-labs"
    },
    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Product Development"
    ],
    description: "Software Engineer, Founder at Iwaju Labs, and solo developer building profitable products."
  };

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <GoogleAnalytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
