import React from "react";
import { HoverPreviewLink } from "@/components/ui/HoverPreview";
import { previews } from "@/components/ui/previews";

const bibleVerseLink =
  "https://www.biblegateway.com/passage/?search=Proverbs%2013%3A4&version=NIV";

const linkClass = "link font-semibold";

const Hero: React.FC = () => {
  return (
    <div className="space-y-3 text-sm leading-snug font-normal dark:text-gray-300">
      <p>
        <HoverPreviewLink
          href={bibleVerseLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs italic font-normal link-quiet"
          preview={previews.bible}
        >
          (Proverbs 13:4)
        </HoverPreviewLink>
      </p>

      <p>
        i&apos;m a software engineer based Ireland. i just really enjoy building software so whenever i have an idea for a project i go all in.
      </p>
      <p>
        if you want to reach me, please do it through{" "}
        <HoverPreviewLink
          href="mailto:dom1gbadamosi@gmail.com"
          className={linkClass}
          preview={previews.email}
        >
          email
        </HoverPreviewLink>{" "}
        or on{" "}
        <HoverPreviewLink
          href="https://twitter.com/_dngi"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          preview={previews.twitter}
        >
          twitter
        </HoverPreviewLink>
        {"."}
      </p>

      <p>
        you can also find me on{" "}
        <HoverPreviewLink
          href="https://github.com/kiing-dom"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          preview={previews.github}
        >
          github
        </HoverPreviewLink>
        {", "}
        <HoverPreviewLink
          href="https://www.linkedin.com/in/dominion-gbadamosi"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          preview={previews.linkedin}
        >
          linkedin
        </HoverPreviewLink>
        {", or "}
        <HoverPreviewLink
          href="https://www.medium.com/@dngi267"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          preview={previews.medium}
        >
          medium
        </HoverPreviewLink>
        {"."}
      </p>
    </div>
  );
};

export default Hero;
