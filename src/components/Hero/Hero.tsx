"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="pb-8">
      {/* Bio text */}
      <div className="text-xl leading-relaxed text-black dark:text-white space-y-2 max-w-none">
        <p>I'm a developer living in Ireland.</p>

        <p>
          Spend basically all my time working on projects I think are cool, reading books, writing and playing music.
        </p>

        <p>
          you can find some of my work in the{" "}
          <a href="#projects" className="underline hover:no-underline">
            projects section
          </a>
          .
        </p>

        <p>
          always interested in connecting with other developers and learning
          about interesting projects. if you want to chat about tech or
          potential collaborations, feel free to reach out.
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
