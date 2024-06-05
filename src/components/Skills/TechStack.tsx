"use client";
import React from 'react'
import { HoverEffect } from '../ui/card-hover-effect'
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript, SiPython, SiMongodb } from 'react-icons/si'

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

  ]

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="text-3xl font-bold flex flex-col items-center justify-center">Skills</div>
      <HoverEffect items={tech} />
      <div className="text-3xl font-semibold flex flex-col items-center justify-center -mt-4"> & more</div>
    </div>
  )
}


