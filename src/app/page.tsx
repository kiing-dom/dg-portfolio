import Experience from "@/components/Experience/ExperienceMinimal";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/ProjectsMinimal";
import Blog from "@/components/Blog/BlogMinimal";
import Footer from "@/components/ui/FooterMinimal";
import PageShell from "@/components/ui/PageShell";
import type { Metadata } from "next";
import ReadingList from "@/components/ReadingList/ReadingList";

export const metadata: Metadata = {
  title: "Home",
  description: "Software Engineer, Founder at Iwaju Labs, and solo developer building profitable products. Explore my projects, experience, and blog documenting the journey from â‚¬0 â†’ â‚¬10k MRR.",
  openGraph: {
    title: "Dominion Gbadamosi - Software Engineer & Founder",
    description: "Software Engineer, Founder at Iwaju Labs, and solo developer building profitable products. Explore my projects, experience, and blog.",
    url: "/",
    images: [
      {
        url: "/assets/images/hero/gradphoto.jpg",
        width: 1200,
        height: 630,
        alt: "Dominion Gbadamosi Portfolio",
      },
    ],
  },
};

export default function Home() {
  return (
    <PageShell>
      <header id="hero" className="mb-8">
        <h1 className="text-sm font-semibold text-black dark:text-white">
          Dominion Gbadamosi
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Software Engineer, Founder · aka dom, kiing dom, dngi
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
