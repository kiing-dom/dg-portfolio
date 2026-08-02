import React from "react";

const bibleVerseLink =
  "https://www.biblegateway.com/passage/?search=Proverbs%2013%3A4&version=NIV";

const linkClass = "link font-semibold";

const Hero: React.FC = () => {
  return (
    <div className="space-y-3 text-sm leading-snug font-normal dark:text-gray-300">
      <p>
        <a
          href={bibleVerseLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs italic font-normal link-quiet"
        >
          (Proverbs 13:4)
        </a>
      </p>

      <p>
        I&apos;m a software engineer based Ireland. I just really enjoy building software so whenever I have an idea for a project I go all in.
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
