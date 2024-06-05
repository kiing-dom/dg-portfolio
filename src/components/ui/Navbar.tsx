import Link from 'next/link';
import React from 'react'
import { FaStar, FaLinkedin, FaGithub } from 'react-icons/fa'


const socials = [
    {
        link: "https://www.linkedin.com/in/dominion-gbadamosi",
        label: "LinkedIn",
        Icon: FaLinkedin
    },
    {
        link: "https://www.github.com/kiing-dom",
        label: "GitHub",
        Icon: FaGithub
    }
]


export default function Navbar() {
    return (
        <nav className= " py-10 flex justify-between items-center">
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-purple-800 -rotate-2">DOMINION 🌟 </h1>
            <div className="flex items-center gap-4">
                {socials.map((social, index) => {
                    const Icon = social.Icon;
                    return <Link href={social.link} key={index} aria-label={social.label}>
                        <Icon className='w-8 h-8 hover:scale-125 transition-all'/>
                    </Link>

                })}
            </div>
        </nav>
    )
}
