"use client"

import React, { useRef } from 'react'
import { WobbleCard } from '../ui/wobble-card'
import { SiGeneralmotors } from 'react-icons/si'
import '@/components/Experience/Experience.css'
import { Noto_Sans } from 'next/font/google'
import { motion, useInView } from 'framer-motion'

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "300"
});

const Experience = () => {
  const experiences = [
    {
      position: "Software Engineering Fellow",
      company: "Headstarter AI",
      duration: "July 2024 - Current",
      description: "Developing five innovative AI-based applications, each with unique use cases and technical challenges. Deploying a final project, with the aim of reaching 1000 users. Participating in hackathons with cross-functional teams to prototype and pitch innovative solutions within tight deadlines.",
      logo:"/assets/images/headstarter.jpeg",
      logoSize: "64px"
    },
    {
      position: "Co-Op Software Engineer",
      company: "General Motors",
      duration: "Jun 2022 - Dec 2022",
      description: "Co-developed a company-wide internal management system utilizing Angular for a dynamic front-end and Java to handle the robust back-end, improving departmental efficiency by over 30%",
      logo: <SiGeneralmotors className="text-white" style={{ fontSize: '64px', color: 'cyan' }} />,
      logoSize: '72px'
    },
    {
      position: "Computer Science Student",
      company: "University of Limerick",
      duration: "September 2020 - May 2024",
      description: "Throughout my university journey in Computer Science, I have cultivated a strong foundation in various key disciplines. From hands-on experience in software development and architecture to mastering data structures, algorithms, and statistical analysis, my academic path has equipped me with robust skills in data mining and artificial intelligence.",
      logo: "/assets/images/ul-logo.png",
      logoSize: '64px'
    }
  ]

  const cardVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -100 : 100, // alternate directions
    }),
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3, // staggered delay
        duration: 0.6,
      },
    }),
  }

  return (
    <div className="p-4 sm:p-10">
      <div style={noto.style} className="text-5xl font-bold flex flex-col items-center justify-center pt-12 glow-purple">EXPERIENCE</div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 pt-20">
        {experiences.map((experience, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              key={index}
              ref={ref}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <WobbleCard className="bg-neutral-700 bg-opacity-40 text-white h-[64px] sm:h-[100px] md:h-full lg:h-full flex items-center">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    {typeof experience.logo === 'string' ? (
                      <img src={experience.logo} alt="Logo" style={{ width: experience.logoSize }} />
                    ) : (
                      <div style={{ fontSize: experience.logoSize }}>
                        {experience.logo}
                      </div>
                    )}
                  </div>
                  <div style={{ flex: 1, paddingLeft: '1rem' }}>
                    <h2 className="text-xl font-semibold">{experience.position}</h2>
                    <h3 className="text-lg">{experience.company}</h3>
                    <p style={{ color: '#BB86FC'}} className="text-sm">{experience.duration}</p>
                    <p className='hidden md:block lg:block text-neutral-300'>{experience.description}</p>
                  </div>
                </div>
              </WobbleCard>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience;
