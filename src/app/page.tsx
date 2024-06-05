import Hero from "@/components/Hero/Hero";
import TechStack from "@/components/Skills/TechStack";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className=" bg-black">
      <div className="max-w-7xl mx-auto p-5">
        <Navbar />
        <Hero />
      </div>


      <div className="max-w-7xl mx-auto p-5">
        <TechStack />
      </div>
    </main>
  );
}
