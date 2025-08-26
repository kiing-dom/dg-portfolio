"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="pb-8">
      {/* Bio text */}
      <div className="text-xl leading-relaxed text-black dark:text-white space-y-6 max-w-none">
        <p>i'm a software engineer who loves building things that matter.</p>

        <p>
          i have been hooked on computers ever since i was young. i am
          interested in all domains from web dev to mobile to enterprise
          software and even hardware.
        </p>

        <p>
          currently exploring new opportunities while working on personal
          projects. i write about tech, share my learnings, and try to
          contribute to the developer community whenever possible.
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

        <p className="text-lg">
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
