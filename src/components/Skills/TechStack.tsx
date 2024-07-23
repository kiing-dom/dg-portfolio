"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HoverEffect } from '../ui/card-hover-effect';
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript, SiPython, SiMongodb } from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import '@/components/Skills/TechStack.css';
import { Noto_Sans, Montserrat } from 'next/font/google';

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "300"
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
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Create a reference for the container
  const containerRef = useRef(null);
  // Check if the container is in view
  const isInView = useInView(containerRef, { once: true });

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-5xl mx-auto px-8"
    >
      <div style={noto.style} className="text-5xl font-bold flex flex-col items-center justify-center pt-24 glow-purple">SKILLS</div>
      <HoverEffect items={tech} />
    </motion.div>
  );
}
