"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HoverEffect } from '../ui/card-hover-effect';
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript, SiPython, SiMongodb, SiSpring, SiPostman } from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import '@/components/Skills/TechStack.css';
import { Montserrat, Nunito_Sans } from 'next/font/google';

const nun = Nunito_Sans({
  subsets: ["latin"],
  weight: "700"
});

const mont = Montserrat({
  subsets: ["latin"],
  weight: "300"
});

export default function TechStack() {
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

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className={`${nun.className} text-3xl font-bold text-center mb-8`}>SKILLS</h2>
        <HoverEffect items={tech} />
      </motion.div>
    </section>
  );
}