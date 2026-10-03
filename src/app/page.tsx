import Experience from "@/components/Experience/ExperienceMinimal";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/ProjectsMinimal";
import Blog from "@/components/Blog/BlogMinimal";
import Footer from "@/components/ui/FooterMinimal";
import PageShell from "@/components/ui/PageShell";
import type { Metadata } from "next";
import ReadingList from "@/components/ReadingList/ReadingList";
import { PERSON_ID, canonicalFor, ldJson, pageMetadata } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: SITE_TITLE,
  absoluteTitle: true,
  description: SITE_DESCRIPTION,
});

/** Tells search engines this page is the profile of the Person in the layout. */
const profileLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: canonicalFor("/"),
  name: SITE_TITLE,
  mainEntity: { "@id": PERSON_ID },
};

export default function Home() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJson(profileLd) }}
      />
      <header id="hero" className="mb-8">
        <h1 className="text-sm font-semibold text-black dark:text-white">
          Dominion Gbadamosi
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          software engineer, founder · aka dom, kiing dom, dngi
        </p>
      </header>

      <Hero />

      <Projects />
      <Experience />
      <Blog />
      <ReadingList />

      <Footer />
    </PageShell>
  );
}
