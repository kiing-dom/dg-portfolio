import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/Skills/TechStack";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer"; 

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      <Navbar />
      <div className="max-w-7xl mx-auto p-5 -mt-16">
        <div id="hero">
          <Hero />
        </div>
      </div>
      <div className="max-w-7xl mx-auto -mt-16"></div>
      <div id="experience">
        <Experience />
      </div>
      <div className="max-w-7xl mx-auto p-5 pt-24">
        <div id="projects">
          <Projects />
        </div>
        <div className="max-w-7xl mx-auto p-5"></div>
        <div id="techstack">
          <TechStack />
        </div>
      </div>
      <Footer />
    </main>
  );
}
