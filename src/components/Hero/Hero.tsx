"use client";
import React from "react";

const Hero: React.FC = () => {
  const bibleVerseLink = "https://www.biblegateway.com/passage/?search=Proverbs%2013%3A4&version=NIV";
  return (
    <div className="pb-8">
      {/* Bio text */}
      <div className="text-xl leading-relaxed text-black dark:text-white space-y-2 max-w-none">

        <p>
          Living to satisfy my curiosity. <span onClick={() => window.open(bibleVerseLink, '_blank')} className="text-sm italic hover:underline hover:cursor-pointer">(Proverbs 13:4)</span>
        </p>

        <p>
          If you want to reach me, please do it through email or on{" "}
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
          you can also find me on{" "}
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
