"use client"
import { cn } from '../../utils/cn';
import Link from 'next/link';
import { SiFirebase, SiJavascript, SiOpenai, SiReact, SiHtml5, SiTailwindcss, SiGooglechrome, SiTypescript, SiNextdotjs, SiPrisma, SiMongodb, SiVercel, SiStripe, SiClerk, SiSpring, SiAmazonaws, SiFlask, SiPython, SiDiscord, SiYoutube, SiJson, SiGithub } from 'react-icons/si';
import "@/components/Projects/Projects.css";
import { Nunito_Sans } from 'next/font/google';
import Image from 'next/image';
import { BentoGrid, BentoGridItem } from '../../components/ui/bento-grid'
import { FaJava } from 'react-icons/fa6';

const nun = Nunito_Sans({
    subsets: ["latin"],
    weight: "400"
});

export default function Projects() {
    const projects = [
        {
            title: "Auth the Grid (CLI Password Manager)",
            tech: [SiPython, SiJson],
            description: "Using a cli interface to manage passwords",
            link: "https://github.com/kiing-dom/cli-password-manager",
            cover: "/assets/images/auththegrid.png"
        },
        {
            title: "Educational Streaming Site",
            tech: [SiSpring, FaJava, SiReact, SiAmazonaws,],
            description: "A full-stack streaming platform with Spring Boot for backend microservices and React for the frontend",
            link: "https://github.com/kiing-dom/streamingsite",
            cover: "/assets/images/streamingsite.png",
        },
        {
            title: "FyteSize: Nutrition Tracker for Boxers",
            tech: [SiReact, SiJavascript, SiOpenai, SiFirebase],
            description: "A comprehensive nutrition tracking app tailored for boxers to manage their diet and enhance performance.",
            link: "https://github.com/kiing-dom/boxing-nutrition-tracker-fyp",
            cover: "/assets/images/fytesize.png",
        },
        {
            title: "YouTility",
            tech: [SiJavascript, SiHtml5, SiTailwindcss, SiGooglechrome],
            description: "A Chrome extension created to enhance your YouTube experience with various utilities and features.",
            link: "https://chromewebstore.google.com/detail/youtility/ghhfnphagokpndddeccmkbbinnhdhalc",
            cover: "/assets/images/youtility.png",
        },
        {
            title: "YouTube Stat Discord Bot",
            tech: [SiPython, SiFlask, SiDiscord, SiYoutube],
            description: "A Discord bot that lets you quickly check youtube stats for channels, videos etc.",
            link: "https://github.com/kiing-dom/discord-youtube-bot",
            cover: "/assets/images/discord-youtube.png",
        },
        {
            title: "AI Flashcards SaaS",
            tech: [SiJavascript, SiNextdotjs, SiTailwindcss, SiFirebase, SiStripe, SiClerk],
            description: "A SaaS application for AI-powered flashcards, built with React and Material UI, utilizing Next.js, Clerk for authentication, Firebase, OpenAI integration, and Stripe for payment processing.",
            link: "https://github.com/kiing-dom/ai-flashcards",
            cover: "/assets/images/ai-flashcards.png",
        },
        {
            title: "Twitter/X Clone",
            tech: [SiTypescript, SiNextdotjs, SiTailwindcss, SiPrisma, SiMongodb, SiVercel],
            description: "A full-stack website mirroring the functionality of Twitter/X",
            link: "https://x-clone-rho.vercel.app/",
            cover: "/assets/images/twitter-x-clone.png",
        },

        {
            title: "More Projects on GitHub",
            tech: [SiGithub],
            description: "Explore more of my projects and contributions on GitHub",
            link: "https://github.com/kiing-dom",
            cover: "/assets/images/githubheader.jpeg",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">PROJECTS</h2>
            <BentoGrid className="mx-auto">
                {projects.map((project, index) => (
                    <Link key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <BentoGridItem
                            title={project.title}
                            description={project.description}
                            header={
                                <div className="relative w-full h-40">
                                    <Image
                                        src={project.cover}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-xl"
                                    />
                                </div>
                            }
                            icon={
                                <div className="flex space-x-2">
                                    {project.tech.map((Icon, i) => (
                                        <Icon key={i} className="text-xl" />
                                    ))}
                                </div>
                            }
                            className="h-full"
                        />
                    </Link>
                ))}
            </BentoGrid>
        </div>
    );
}