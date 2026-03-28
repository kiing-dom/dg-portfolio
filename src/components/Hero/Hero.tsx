"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="pb-8">
      {/* Bio text */}
      <div className="text-xl leading-relaxed text-black dark:text-white space-y-2 max-w-none">
        <p>I'm a developer living in Ireland.</p>

        <p>
          I spend my time working on projects I find interesting, reading
        </p>

        <p>
          You can find some of my work in the{" "}
          <a href="#projects" className="underline decoration-gray-300 dark:decoration-gray-600 hover:decoration-black dark:hover:decoration-white transition-colors">
            projects section
          </a>
          .
        </p>

        <p>
          Always interested in connecting with other developers and learning
          about interesting projects. If you want to chat about tech or
          potential collaborations, feel free to reach out through email or on&nbsp;
          <a 
            href="https://twitter.com/_dngi"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gray-300 dark:decoration-gray-600 hover:decoration-black dark:hover:decoration-white transition-colors"
          >
            Twitter
          </a>.
        </p>

        <p className="text-sm">
          you can find me on{" "}
          <a
            href="https://github.com/kiing-dom"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            github
          </a>
          {", "}
          <a
            href="https://www.linkedin.com/in/dominion-gbadamosi"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            linkedin
          </a>
          {", or "}
          <a
            href="https://www.medium.com/@dngi267"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            medium
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Hero;
