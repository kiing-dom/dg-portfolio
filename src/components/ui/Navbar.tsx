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
    <nav className="bg-[#d8d8ff] text-neutral-500 shadow-md fixed top-4 left-1/2 transform -translate-x-1/2 w-auto z-50 rounded-full px-4 py-2 md:px-6 md:py-2">
      <div className="flex justify-between items-center">
        <Link href="#hero" passHref legacyBehavior>
          <a className="legacyBehavior pr-4">
            <img src='/assets/images/purple-star.png' alt='' className='w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 hover:rotate-12 hover:scale-125' />
          </a>
        </Link>
        
        <div className="hidden md:flex items-center gap-4">
          <Link href="#hero" passHref legacyBehavior>
            <a style={noto.style} className="text-xs md:text-sm legacyBehavior hover:text-white transform transition-transform">About</a>
          </Link>
          <Link href="#experience" passHref legacyBehavior>
            <a style={noto.style} className="text-xs md:text-sm legacyBehavior hover:text-white transform transition-transform">Experience</a>
          </Link>
          <Link href="#projects" passHref legacyBehavior>
            <a style={noto.style} className="text-xs md:text-sm legacyBehavior hover:text-white transform transition-transform">Projects</a>
          </Link>
          <Link href="#techstack" passHref legacyBehavior>
            <a style={noto.style} className="text-xs md:text-sm legacyBehavior hover:text-white transform transition-transform">Skills</a>
          </Link>
          <div className="flex items-center gap-2">
            {socials.map((social, index) => {
              const Icon = social.Icon;
              return (
                <Link href={social.link} key={index} passHref legacyBehavior>
                  <a className="legacyBehavior hover:text-white transform transition-transform" target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <Icon className="w-4 h-4 md:w-5 md:h-5 hover:scale-125 transition-all" />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        
        <button 
          className="md:hidden text-neutral-500 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-[#d8d8ff] rounded-lg shadow-lg">
          <div className="flex flex-col items-center py-2">
            <Link href="#hero" passHref legacyBehavior>
              <a style={noto.style} className="text-sm py-2 hover:text-white transform transition-transform">About</a>
            </Link>
            <Link href="#experience" passHref legacyBehavior>
              <a style={noto.style} className="text-sm py-2 hover:text-white transform transition-transform">Experience</a>
            </Link>
            <Link href="#projects" passHref legacyBehavior>
              <a style={noto.style} className="text-sm py-2 hover:text-white transform transition-transform">Projects</a>
            </Link>
            <Link href="#techstack" passHref legacyBehavior>
              <a style={noto.style} className="text-sm py-2 hover:text-white transform transition-transform">Skills</a>
            </Link>
            <div className="flex items-center gap-4 mt-2">
              {socials.map((social, index) => {
                const Icon = social.Icon;
                return (
                  <Link href={social.link} key={index} passHref legacyBehavior>
                    <a className="legacyBehavior hover:text-white transform transition-transform" target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <Icon className="w-5 h-5 hover:scale-125 transition-all" />
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