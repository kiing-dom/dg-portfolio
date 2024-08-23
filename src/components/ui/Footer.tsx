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
    <footer className="bg-purple-900 bg-opacity-20 rounded-lg text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4">
          {socials.map((social, index) => {
            const Icon = social.Icon;
            return (
              <Link href={social.link} key={index} aria-label={social.label} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <Icon className="w-8 h-8 hover:scale-125 transition-all" />
                </a>
              </Link>
            );
          })}
        </div>
        <p className="text-sm">&copy; Dominion Gbadamosi {new Date().toLocaleDateString().substring(6)} All rights reserved.</p>
      </div>
    </footer>
  );
}
