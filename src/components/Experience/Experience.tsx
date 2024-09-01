"use client"

import React, { useRef } from 'react'
import { SiGeneralmotors } from 'react-icons/si'
import '@/components/Experience/Experience.css'
import { Noto_Sans, Nunito_Sans } from 'next/font/google'
import Image from 'next/image'

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "300"
});

const nun = Nunito_Sans({
  subsets: ["latin"],
  weight: "400"
});

const nun_bold = Nunito_Sans({
  subsets: ["latin"],
  weight: "700"
})

const Experience = () => {
  const experiences = [
    {
      position: "Software Engineering Fellow",
      company: "Headstarter AI",
      duration: "Jul 2024 - Sep 2024",
      description: "Developing five innovative AI-based applications, each with unique use cases and technical challenges. Deploying a final project, with the aim of reaching 1000 users. Participating in hackathons with cross-functional teams to prototype and pitch innovative solutions within tight deadlines.",
      logo:"/assets/images/headstarter.jpeg",
      logoSize: "128px"
    },
    {
      position: "Co-Op Software Engineer",
      company: "General Motors",
      duration: "Jun 2022 - Dec 2022",
      description: "Co-developed a company-wide internal management system utilizing Angular for a dynamic front-end and Java to handle the robust back-end, improving departmental efficiency by over 30%",
      logo: <SiGeneralmotors className="text-white" style={{ fontSize: '128px', color: 'cyan' }} />,
      logoSize: '126px'
    },
    {
      position: "Computer Science Student",
      company: "University of Limerick",
      duration: "September 2020 - May 2024",
      description: "Throughout my university journey in Computer Science, I have cultivated a strong foundation in various key disciplines. From hands-on experience in software development and architecture to mastering data structures, algorithms, and statistical analysis, my academic path has equipped me with robust skills in data mining and artificial intelligence.",
      logo: "/assets/images/ul-logo.png",
      logoSize: '128px'
    }
  ];

  return (
    <div className="container mx-auto px-2 py-8">
      <h2 style={nun_bold.style} className="text-3xl font-bold text-center mb-6">EXPERIENCE</h2>
      
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-row bg-neutral-600 rounded-lg shadow-lg overflow-hidden">
            <div className="w-1/5 flex items-center justify-center p-2 bg-neutral-900">
              {typeof exp.logo === 'string' ? (
                <Image className='rounded-md' src={exp.logo} alt={exp.company} width={64} height={64} />
              ) : (
                <SiGeneralmotors className="text-white" style={{ fontSize: '64px', color: 'cyan' }} />
              )}
            </div>
            <div className="w-4/5 p-3">
              <h3 style={nun_bold.style} className="text-lg font-bold text-white">{exp.position}</h3>
              <h4 style={nun.style} className="text-sm text-gray-300">{exp.company} | {exp.duration}</h4>
              <p style={noto.style} className="text-xs text-gray-300 mt-1">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience;