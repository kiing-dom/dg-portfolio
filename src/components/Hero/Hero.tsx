import React from "react";

const bibleVerseLink =
  "https://www.biblegateway.com/passage/?search=Proverbs%2013%3A4&version=NIV";

const linkClass =
  "underline decoration-gray-300 dark:decoration-gray-600 hover:decoration-black dark:hover:decoration-white transition-colors text-black dark:text-white";

const Hero: React.FC = () => {
  return (
    <div className="space-y-4 text-[15px] leading-7 text-gray-700 dark:text-gray-300">
      <p>
        Living to satisfy my curiosity.{" "}
        <a
          href={bibleVerseLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs italic hover:underline"
        >
          (Proverbs 13:4)
        </a>
      </p>

      <p>
        If you want to reach me, please do it through{" "}
        <a href="mailto:dom1gbadamosi@gmail.com" className={linkClass}>
          email
        </a>{" "}
        or on{" "}
        <a
          href="https://twitter.com/_dngi"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Twitter
        </a>
        {"."}
      </p>

      <p>
        You can also find me on{" "}
        <a
          href="https://github.com/kiing-dom"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          github
        </a>
        {", "}
        <a
          href="https://www.linkedin.com/in/dominion-gbadamosi"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          linkedin
        </a>
        {", or "}
        <a
          href="https://www.medium.com/@dngi267"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          medium
        </a>
        {"."}
      </p>
    </div>
  );
};

export default Hero;
