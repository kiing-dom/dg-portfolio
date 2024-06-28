"use client";
import React from 'react'
import { HoverEffect } from '../ui/card-hover-effect'
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript, SiPython, SiMongodb } from 'react-icons/si'
import '@/components/Skills/TechStack.css'
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
    {
      text: "React",
      Icon: SiReact
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs
    },
    {
      text: "Javascript",
      Icon: SiJavascript
    },
    {
      text: "TypeScript",
      Icon: SiTypescript
    }, 
    {
      text: "Git",
      Icon: SiGit
    },
    {
      text: "Python",
      Icon: SiPython
    },
    {
      text: "MongoDB",
      Icon: SiMongodb
    },

  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div style={noto.style} className="text-5xl font-bold flex flex-col items-center justify-center pt-24 glow-purple">SKILLS</div>
      <HoverEffect items={tech} />
      <div style={mont.style} className="text-3xl font-semibold flex flex-col items-center justify-center -mt-10 mb-24"> & more</div>
    </div>
  )
}


