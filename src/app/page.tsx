import Experience from "@/components/Experience/ExperienceMinimal";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/ProjectsMinimal";
import Blog from "@/components/Blog/BlogMinimal";
import Footer from "@/components/ui/FooterMinimal";
import Navbar from "@/components/ui/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Software Engineer, Founder at Iwaju Labs, and solo developer building profitable products. Explore my projects, experience, and blog documenting the journey from €0 → €10k MRR.",
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
    <main className="bg-white dark:bg-black min-h-screen transition-colors">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {" "}
        {/* Large name header above everything */}
        <div className="mb-16">
          <h1 className="text-9xl font-bold text-black dark:text-white mb-4 tracking-tight select-none">
            DOMINION
          </h1>

          <p className="text-black dark:text-white font-semibold mb-2 text-lg uppercase">
            founder @
            <a href="http://github.com/iwaju-labs" className="hover:underline">
              <span>Iwaju Labs &copy;</span>
            </a>
          </p>
          <p className="text-black dark:text-white mb-0 text-sm uppercase">
            aka dom, kiing dom, dngi
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-16">
            <section id="hero">
              <Hero />
            </section>

            <section id="experience">
              <Experience />
            </section>
          </div>
          {/* Right Column */}
          <div className="space-y-16">
            <section id="projects">
              <Projects />
            </section>

            <section id="blog">
              <Blog />
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
