import React from 'react';
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript, SiPython, SiMongodb, SiSpring, SiPostman } from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

const tech = [
  { text: "React", Icon: SiReact },
  { text: "Next.js", Icon: SiNextdotjs },
  { text: "Tailwind", Icon: SiTailwindcss },
  { text: "Node.js", Icon: SiNodedotjs },
  { text: "Javascript", Icon: SiJavascript },
  { text: "TypeScript", Icon: SiTypescript },
  { text: "Java", Icon: FaJava },
  { text: "Git", Icon: SiGit },
  { text: "Python", Icon: SiPython },
  { text: "MongoDB", Icon: SiMongodb },
  { text: "Spring", Icon: SiSpring },
  { text: "Postman", Icon: SiPostman }
];

const TechStack = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">SKILLS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tech.map(({ text, Icon }) => (
            <div key={text} className="flex flex-col items-center justify-center p-4 bg-black rounded-lg shadow-md transition-transform hover:scale-105">
              <Icon className="text-4xl mb-2 text-white" />
              <span className="text-md font-bold text-[#f8f8ff]">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;