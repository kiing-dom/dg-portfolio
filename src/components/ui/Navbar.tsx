"use client"

import { Noto_Sans } from 'next/font/google';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur bg-white/80 dark:bg-black/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 fixed top-4 left-1/2 transform -translate-x-1/2 w-auto z-50 rounded-full px-6 py-2 shadow-none">
      <div className="flex justify-between items-center">
        <Link href="#hero" passHref legacyBehavior>
          <a className="pr-4">
            <img src='icon.ico' alt='' className='w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 hover:rotate-6 hover:scale-110' />
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="#hero" passHref legacyBehavior>
            <a style={noto.style} className="text-sm hover:text-black dark:hover:text-white transition-colors">About</a>
          </Link>
          <Link href="#experience" passHref legacyBehavior>
            <a style={noto.style} className="text-sm hover:text-black dark:hover:text-white transition-colors">Experience</a>
          </Link>
          <Link href="#projects" passHref legacyBehavior>
            <a style={noto.style} className="text-sm hover:text-black dark:hover:text-white transition-colors">Projects</a>
          </Link>
          <Link href="#techstack" passHref legacyBehavior>
            <a style={noto.style} className="text-sm hover:text-black dark:hover:text-white transition-colors">Skills</a>
          </Link>
          <div className="flex items-center gap-2">
            {socials.map((social, index) => {
              const Icon = social.Icon;
              return (
                <Link href={social.link} key={index} passHref legacyBehavior>
                  <a className="hover:text-black dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <Icon className="w-5 h-5" />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>

        <button 
          className="md:hidden text-neutral-800 dark:text-neutral-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-black/95 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-none">
          <div className="flex flex-col items-center py-2">
            <Link href="#hero" passHref legacyBehavior>
              <a style={noto.style} className="text-sm py-2 hover:text-black dark:hover:text-white transition-colors">About</a>
            </Link>
            <Link href="#experience" passHref legacyBehavior>
              <a style={noto.style} className="text-sm py-2 hover:text-black dark:hover:text-white transition-colors">Experience</a>
            </Link>
            <Link href="#projects" passHref legacyBehavior>
              <a style={noto.style} className="text-sm py-2 hover:text-black dark:hover:text-white transition-colors">Projects</a>
            </Link>
            <Link href="#techstack" passHref legacyBehavior>
              <a style={noto.style} className="text-sm py-2 hover:text-black dark:hover:text-white transition-colors">Skills</a>
            </Link>
            <div className="flex items-center gap-4 mt-2">
              {socials.map((social, index) => {
                const Icon = social.Icon;
                return (
                  <Link href={social.link} key={index} passHref legacyBehavior>
                    <a className="hover:text-black dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <Icon className="w-5 h-5" />
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}