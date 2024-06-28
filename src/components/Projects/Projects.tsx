import { cn } from '@/utils/cn';
import Link from 'next/link';
import React from 'react';
import { SiFirebase, SiJavascript, SiOpenai, SiReact, SiHtml5, SiTailwindcss, SiGooglechrome, SiTypescript, SiNextdotjs, SiPrisma, SiMongodb, SiVercel } from 'react-icons/si';
import { DirectionAwareHover } from '../ui/direction-aware-hover';
import "@/components/Projects/Projects.css";
import { Noto_Sans } from 'next/font/google';

const noto = Noto_Sans({
    subsets: ["latin"],
    weight: "300"
});

export default function Projects() {

    const projects = [
        {
            title: "FyteSize: Nutrition Tracker for Boxers",
            tech: [SiReact, SiJavascript, SiOpenai, SiFirebase],
            description: "A comprehensive nutrition tracking app tailored for boxers to manage their diet and enhance performance.",
            link: "https://github.com/kiing-dom/boxing-nutrition-tracker-fyp",
            cover: "/assets/images/fytesize.png",
            background: ""
        },
        {
            title: "YouTility",
            tech: [SiJavascript, SiHtml5, SiTailwindcss, SiGooglechrome],
            description: "A Chrome extension created to enhance your YouTube experience with various utilities and features.",
            link: "https://x-clone-rho.vercel.app/",
            cover: "/assets/images/youtility.png",
            background: ""
        },
        {
            title: "Twitter/X Clone",
            tech: [SiTypescript, SiNextdotjs, SiTailwindcss, SiPrisma, SiMongodb, SiVercel],
            description: "A full-stack website mirroring the functionality of Twitter/X",
            link: "https://chromewebstore.google.com/detail/youtility/ghhfnphagokpndddeccmkbbinnhdhalc",
            cover: "/assets/images/twitter-x-clone.png",
            background: ""
        },
    ];

    return (
        <div className="py-10 px-5 sm:px-10">
            <div style={noto.style} className="text-3xl sm:text-5xl font-bold flex flex-col items-center justify-center pt-24 glow-purple text-center">PROJECTS</div>
            <div className="grid grid-cols-1 sm:grid-cols-1 sm:place-items-center lg:grid-cols-2 gap-8 md:gap-12 xl:gap-8 pt-12">
                {projects.map((project, idx) => {
                    return (
                        <Link href={project.link} key={idx} passHref legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer">
                                <div className={cn("p-2 rounded-md bg-neutral-400 bg-opacity-10", project.background)}>
                                    <DirectionAwareHover imageUrl={project.cover} className="w-full h-64 space-y-5 cursor-pointer rounded-md">
                                        <div className="space-y-5 p-2"> {/* Added padding */}
                                            <h1 className="text-lg sm:text-xl font-semibold">{project.title}</h1>
                                            <div className="hidden lg:block text-sm text-white">{project.description}</div>
                                            <div className="flex flex-wrap items-center gap-3">
                                                {project.tech.map((Icon, idx) => {
                                                    return <Icon className="w-6 h-6 sm:w-8 sm:h-8" key={idx} />;
                                                })}
                                            </div>
                                        </div>
                                    </DirectionAwareHover>
                                </div>
                            </a>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
