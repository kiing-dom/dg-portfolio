import { Noto_Sans } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

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
];

const noto = Noto_Sans({
    subsets: ["latin"],
    weight: "700",
  });

export default function Navbar() {
  return (
    <nav className="bg-transparent text-white shadow-md py-4 px-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-purple-800 -rotate-2">🌟</h1>
        <div className="flex items-center gap-8">
          <Link style={noto.style} href="#hero">
            About
          </Link>
          <Link style={noto.style} href="#experience">
            Experience
          </Link>
          <Link style={noto.style} href="#projects">
            Projects
          </Link>
          <Link style={noto.style} href="#techstack">
            Skills
          </Link>
          <div className="flex items-center gap-4">
            {socials.map((social, index) => {
              const Icon = social.Icon;
              return (
                <Link href={social.link} key={index} aria-label={social.label} legacyBehavior>
                  <a>
                    <Icon className="w-8 h-8 hover:scale-125 transition-all" />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
