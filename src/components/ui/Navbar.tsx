"use client";

import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaMediumM, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";

const socials = [
  {
    link: "https://www.linkedin.com/in/dominion-gbadamosi",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    link: "https://www.github.com/kiing-dom",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    link: "https://www.medium.com/@dngi267",
    label: "Medium",
    Icon: FaMediumM,
  },
  {
    link: "https://www.twitter.com._dngi",
    label: "Twitter/X",
    Icon: FaXTwitter,
  },
  {
    link: "https://discord.gg/scf7jnQjDY",
    label: "Join the Discord",
    Icon: FaDiscord,
  }
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {" "}
        <div className="flex items-center gap-8">
          <Link
            href="/#hero"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
          >
            home
          </Link>
          <Link
            href="/#experience"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
          >
            experience
          </Link>{" "}
          <Link
            href="/#projects"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
          >
            projects
          </Link>
          <Link
            href="/#blog"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
          >
            blog
          </Link>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="https://drive.google.com/file/d/1w2rVPxk8DvZrMlr6CdMwgBlkUhPE4qsb/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium"
            >
              resume
            </a>
            <ThemeToggle />
            {socials.map((social) => {
              const Icon = social.Icon;
              return (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
