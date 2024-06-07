import React from 'react'
import { WobbleCard } from '../ui/wobble-card'
import { SiGeneralmotors } from 'react-icons/si'
import '@/components/Experience/Experience.css'
import { Noto_Sans } from 'next/font/google'

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "300"
});

export default function Experience() {

    const experiences = [
        {
            position: "Co-Op Software Engineer",
            company: "General Motors",
            duration: "Jun 2022 - Dec 2022",
            description: "Co-developed a company-wide internal management system utitlising Angular for a dynamic front-end and Java to handle the robust back-end, improving departmental efficiency by over 30%",
            logo: <SiGeneralmotors className="text-white" style={{ fontSize: '3rem' }} />,
            logoSize: '3rem'
        },
        {
            position: "Computer Science Student",
            company: "University of Limerick",
            duration: "August 2020 - May 2024",
            description:"",
            logo: "/assets/images/ul-logo.png",
            logoSize: '72px'
        }
    ]

    return (
        <div className="p-4 sm:p-10">
           <div style={noto.style} className="text-5xl font-bold flex flex-col items-center justify-center pt-12 glow-purple">EXPERIENCE</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-20">
            {experiences.map((experience, index) => (
              <WobbleCard key={index} containerClassName="p-4" className="bg-transparent text-white">
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
                    <p className="text-sm text-yellow-300">{experience.duration}</p>
                    <p>{experience.description}</p>
                  </div>
                </div>
              </WobbleCard>
            ))}
          </div>
        </div>
    )
}
