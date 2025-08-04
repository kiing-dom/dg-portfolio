import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/Skills/TechStack";
import Footer from "@/components/ui/Footer"; 

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      <section id="hero" className="relative hero-section">
        <Hero />
      </section>
      
      <section id="experience" className="section-transition relative z-10 bg-white dark:bg-black py-16">
        <Experience />
      </section>
      
      <section id="projects" className="section-transition relative z-10 bg-white dark:bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Projects />
        </div>
      </section>
      
      <section id="techstack" className="section-transition relative z-10 bg-white dark:bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <TechStack />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
