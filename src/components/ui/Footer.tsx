import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

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
  }, {
    link: "https://www.youtube.com/@1KIINGDOM",
    label: "YouTube channel",
    Icon: FaYoutube
  }
];

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 py-8 mt-16">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4">
          {socials.map((social, index) => {
            const Icon = social.Icon;
            return (
              <Link href={social.link} key={index} aria-label={social.label} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <Icon className="w-6 h-6 hover:text-black dark:hover:text-white transition-colors" />
                </a>
              </Link>
            );
          })}
        </div>
        <p className="text-xs">&copy; Dominion Gbadamosi {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
}
