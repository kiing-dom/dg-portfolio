"use client"

import React, { useState } from 'react'
import { SiGeneralmotors } from 'react-icons/si'
import '@/components/Experience/Experience.css'
import Image from 'next/image'

const Experience = () => {
  const experiences = [
    {
      position: "Software Engineer",
      company: "BG Collections",
      duration: "Jul 2025 - Present",
      description: "Developed scalable ecommerce site and admin management system for small business.",
      logo: "/assets/images/experience/bg-logo.png",
      logoSize: "128px"
    },
    {
      position: "AI Data Analyst",
      company: "TransPerfect",
      duration: "Jan 2025 - Current",
      description: "Contributing to confidential machine learning and data-driven initiatives for a private client through a third-party contractor.",
      logo:"/assets/images/experience/transperfect-logo.jpeg",
      logoSize: "128px"
    },
    {
      position: "Software Engineering Fellow",
      company: "Headstarter AI",
      duration: "Jul 2024 - Sep 2024",
      description: "Developing five innovative AI-based applications, each with unique use cases and technical challenges. Deploying a final project, with the aim of reaching 1000 users. Participating in hackathons with cross-functional teams to prototype and pitch innovative solutions within tight deadlines.",
      logo:"/assets/images/experience/headstarter.jpeg",
      logoSize: "128px"
    },
    {
      position: "Student Tutor",
      company: "University of Limerick",
      duration: "Apr 2023 - Jun 2024",
      description: "Provided tutoring services to fellow students in subjects such as OOP, Software Architecture + Design Patterns etc. Mentored students through the process of solving complex algorithmic problems, improving their problem-solving skills. Developed personalised study plans and assisted with coursework leading to improved academic performance.",
      logo: "/assets/images/experience/ul-logo.png"
    },
    {
      position: "Co-Op Software Engineer",
      company: "General Motors",
      duration: "Jun 2022 - Dec 2022",
      description: "Co-developed a company-wide internal management system utilizing Angular for a dynamic front-end and Java to handle the robust back-end, improving departmental efficiency by over 30%",
      logo: <SiGeneralmotors className="text-white" style={{ fontSize: '128px', color: 'cyan' }} />,
      logoSize: '128px'
    },
    {
      position: "Computer Science Student",
      company: "University of Limerick",
      duration: "September 2020 - May 2024",
      description: "Throughout my university journey in Computer Science, I have cultivated a strong foundation in various key disciplines. From hands-on experience in software development and architecture to mastering data structures, algorithms, and statistical analysis, my academic path has equipped me with robust skills in data mining and artificial intelligence.",
      logo: "/assets/images/experience/ul-logo.png",
      logoSize: '128px'
    }
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 4);

  return (
    <div className="container mx-auto px-2 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight text-neutral-900 dark:text-neutral-100">Experience</h2>
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {visibleExperiences.map((exp, index) => (
          <div key={index} className="group border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 flex items-center gap-4 bg-white dark:bg-black hover:bg-neutral-50 dark:hover:bg-neutral-900 transition">
            <div className="relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              {typeof exp.logo === 'string' ? (
                <Image className='rounded-md' src={exp.logo} alt={exp.company} fill style={{ objectFit: 'cover' }} />
              ) : (
                <SiGeneralmotors className="text-neutral-700 dark:text-neutral-200" style={{ fontSize: '32px' }} />
              )}
            </div>
            <div className="flex-1">              
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold group-hover:underline text-neutral-900 dark:text-neutral-100">{exp.position}</h3>
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1 font-bold">
                {exp.company} | {exp.duration}
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
      {experiences.length > 4 && (
        <div className='flex justify-center mt-8'>
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className='px-4 py-2 text-sm border rounded border-neutral-300 dark:border-neutral-700 dark:hover:bg-neutral-800 transition'
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  )
}

export default Experience;