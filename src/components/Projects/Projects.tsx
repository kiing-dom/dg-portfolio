"use client"
import { cn } from '../../utils/cn';
import Link from 'next/link';
import { SiFirebase, 
    SiJavascript, SiTypescript, 
    SiOpenai, 
    SiReact, 
    SiHtml5, 
    SiTailwindcss, 
    SiGooglechrome, 
    SiNextdotjs, 
    SiPrisma, 
    SiMongodb, 
    SiVercel, 
    SiStripe, 
    SiClerk, 
    SiSpring, 
    SiAmazonaws, 
    SiFlask, 
    SiPython, SiFastapi,
    SiDiscord, 
    SiYoutube, 
    SiJson, 
    SiGithub,
    SiSpotify
 } from 'react-icons/si';
import "@/components/Projects/Projects.css";
import { Nunito_Sans } from 'next/font/google';
import Image from 'next/image';
import { FaJava } from 'react-icons/fa6';

const nun = Nunito_Sans({
    subsets: ["latin"],
    weight: "400"
});

import { useState } from "react";

export default function Projects() {
    const projects = [
        {
            title: "chordn8",
            tech: [SiPython, SiFastapi, SiNextdotjs, SiTypescript],
            description: "An AI web tool for extracting and visualizing chords from audio files, using a multi-stage ML pipeline.",
            link: "https://medium.com/@dngi267/piano-lessons-from-an-ai-powered-chord-recognition-app-994a1b71c905",
            cover: "/assets/images/projects/chordn8-icon.jpg",
        },
        {
            title: "Perpetua",
            tech: [SiNextdotjs, SiTypescript, SiFirebase],
            description: "A modern note taking application with a handcrafter rich-text editor, Markdown support, syntax highlighting and voice note recording.",
            link: "https://github.com/kiing-dom/spotify-insights",
            cover: "/assets/images/projects/perpetua-icon.jpg",
        },
        {
            title: "Spotsight",
            tech: [SiSpring, FaJava, SiSpotify],
            description: "A CLI application to get information about your top songs/artists/tracks using the Spotify API",
            link: "https://github.com/kiing-dom/spotify-insights",
            cover: "/assets/images/projects/spotsight.jpg",
        },
        {
            title: "Auth the Grid (CLI Password Manager)",
            tech: [SiPython, SiJson],
            description: "Using a cli interface to manage passwords",
            link: "https://github.com/kiing-dom/cli-password-manager",
            cover: "/assets/images/projects/auththegrid.png"
        },
        {
            title: "Educational Streaming Site",
            tech: [SiSpring, FaJava, SiReact, SiAmazonaws,],
            description: "A full-stack streaming platform with Spring Boot for backend microservices and React for the frontend",
            link: "https://github.com/kiing-dom/streamingsite",
            cover: "/assets/images/projects/streamingsite.png",
        },
        {
            title: "FyteSize: Nutrition Tracker for Boxers",
            tech: [SiReact, SiJavascript, SiOpenai, SiFirebase],
            description: "A comprehensive nutrition tracking app tailored for boxers to manage their diet and enhance performance.",
            link: "https://github.com/kiing-dom/boxing-nutrition-tracker-fyp",
            cover: "/assets/images/projects/fytesize.png",
        },
        {
            title: "YouTility",
            tech: [SiJavascript, SiHtml5, SiTailwindcss, SiGooglechrome],
            description: "A Chrome extension created to enhance your YouTube experience with various utilities and features.",
            link: "https://chromewebstore.google.com/detail/youtility/ghhfnphagokpndddeccmkbbinnhdhalc",
            cover: "/assets/images/projects/youtility.png",
        },
        {
            title: "YouTube Stat Discord Bot",
            tech: [SiPython, SiFlask, SiDiscord, SiYoutube],
            description: "A Discord bot that lets you quickly check youtube stats for channels, videos etc.",
            link: "https://github.com/kiing-dom/discord-youtube-bot",
            cover: "/assets/images/projects/discord-youtube.png",
        },
        {
            title: "AI Flashcards SaaS",
            tech: [SiJavascript, SiNextdotjs, SiTailwindcss, SiFirebase, SiStripe, SiClerk],
            description: "A SaaS application for AI-powered flashcards, built with React and Material UI, utilizing Next.js, Clerk for authentication, Firebase, OpenAI integration, and Stripe for payment processing.",
            link: "https://github.com/kiing-dom/ai-flashcards",
            cover: "/assets/images/projects/ai-flashcards.png",
        },
        {
            title: "Twitter/X Clone",
            tech: [SiTypescript, SiNextdotjs, SiTailwindcss, SiPrisma, SiMongodb, SiVercel],
            description: "A full-stack website mirroring the functionality of Twitter/X",
            link: "https://x-clone-rho.vercel.app/",
            cover: "/assets/images/projects/twitter-x-clone.png",
        },

        {
            title: "More Projects on GitHub",
            tech: [SiGithub],
            description: "Explore more of my projects and contributions on GitHub",
            link: "https://github.com/kiing-dom",
            cover: "/assets/images/projects/githubheader.jpeg",
        },
    ];

    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects : projects.slice(0, 4);

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 tracking-tight">Projects</h2>
            <div className="flex flex-col gap-6 max-w-2xl mx-auto">
                {visibleProjects.map((project, index) => (
                    <Link
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 flex items-center gap-4 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
                    >
                        <div className="relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
                            <Image
                                src={project.cover}
                                alt={project.title}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-lg font-semibold group-hover:underline">{project.title}</h3>
                                <span className="flex gap-1">
                                    {project.tech.map((Icon, i) => (
                                        <Icon key={i} className="text-neutral-500 text-base" />
                                    ))}
                                </span>
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">{project.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
            {projects.length > 4 && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowAll((prev) => !prev)}
                        className="px-4 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                    >
                        {showAll ? "View Less" : "View More"}
                    </button>
                </div>
            )}
        </div>
    );
}