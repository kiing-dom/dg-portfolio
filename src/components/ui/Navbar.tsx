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
    <nav className="bg-white bg-opacity-20 text-neutral-500 shadow-md py-4 px-6 fixed top-0 left-0 w-full pt-8 z-50">
      <div className="container mx-auto flex justify-center items-center">


        <div className="flex items-center gap-8">
          <Link href="#hero" passHref legacyBehavior>
            <a className="legacyBehavior">
              <img src='/assets/images/purple-star.png' alt='' className='w-8 h-8 transition-transform duration-300 hover:rotate-12 hover:scale-125' />
            </a>
          </Link>
          <Link href="#hero" passHref legacyBehavior>
            <a style={noto.style} className="legacyBehavior hover:text-white transform transition-transform">About</a>
          </Link>
          <Link href="#experience" passHref legacyBehavior>
            <a style={noto.style} className="legacyBehavior hover:text-white transform transition-transform">Experience</a>
          </Link>
          <Link href="#projects" passHref legacyBehavior>
            <a style={noto.style} className="legacyBehavior hover:text-white transform transition-transform">Projects</a>
          </Link>
          <Link href="#techstack" passHref legacyBehavior>
            <a style={noto.style} className="legacyBehavior hover:text-white transform transition-transform">Skills</a>
          </Link>
          <div className="flex items-center gap-4 ">
            {socials.map((social, index) => {
              const Icon = social.Icon;
              return (
                <Link href={social.link} key={index} passHref legacyBehavior>
                  <a className="legacyBehavior hover:text-white transform transition-transform" target="_blank" rel="noopener noreferrer" aria-label={social.label}>
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
