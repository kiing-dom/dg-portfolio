import { cn } from '@/utils/cn'
import Link from 'next/link'
import React from 'react'
import { SiFirebase, SiJavascript, SiOpenai, SiReact } from 'react-icons/si'
import { DirectionAwareHover } from '../ui/direction-aware-hover'

export default function Projects() {

    const projects = [
        {
            title: "FyteSize: Nutrition Tracker for Boxers",
            tech: [SiReact, SiJavascript, SiOpenai, SiFirebase],
            link: "https://github.com/kiing-dom/boxing-nutrition-tracker-fyp",
            cover: "/assets/images/fytesize.png",
            background: ""
        }
    ]

    return (
        <div className="py-10 p-5 sm:p-0">
            <div className="text-5xl font-bold flex flex-col items-center justify-center pt-24">PROJECTS</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-4">
                {projects.map((project, idx) => {
                    return <Link href={project.link} key={idx}>
                        <div className={cn("p-5 rounded-md", project.background)}>
                            <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
                                <div className='space-y-5'>
                                    <h1>{project.title}</h1>
                                    <div className="flex items-center gap-5">
                                        {project.tech.map((Icon, idx) => {
                                            return <Icon className="w-8 h-8" key={idx} />
                                        })}
                                    </div>
                                </div>

                            </DirectionAwareHover>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}
