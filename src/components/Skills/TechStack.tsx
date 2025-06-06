import React from 'react';
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript, SiPython, SiMongodb, SiSpring, SiPostman, SiDocker, SiPostgresql } from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

const tech = [
  { text: "Java", Icon: FaJava },
  { text: "Spring", Icon: SiSpring },
  { text: "Python", Icon: SiPython },
  { text: "Postman", Icon: SiPostman },
  { text: "Docker", Icon: SiDocker },
  { text: "Git", Icon: SiGit },
  { text: "React", Icon: SiReact },
  { text: "Next.js", Icon: SiNextdotjs },
  { text: "Tailwind", Icon: SiTailwindcss },
  { text: "Node.js", Icon: SiNodedotjs },
  { text: "Javascript", Icon: SiJavascript },
  { text: "TypeScript", Icon: SiTypescript },
  { text: "MongoDB", Icon: SiMongodb },
  { text: "Postgres", Icon: SiPostgresql },
];

const TechStack = () => {
  return (
    <section className="py-8 bg-white dark:bg-black">
      <div className="container mx-auto px-2">
        <h2 className="text-2xl font-bold text-center mb-6 tracking-tight">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {tech.map(({ text, Icon }) => (
            <div key={text} className="flex flex-col items-center justify-center p-2 bg-transparent border border-neutral-100 dark:border-neutral-800 rounded transition-transform hover:scale-105">
              <Icon className="text-xl mb-1 text-neutral-700 dark:text-neutral-200" />
              <span className="text-xs font-medium text-neutral-700 dark:text-neutral-100">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;