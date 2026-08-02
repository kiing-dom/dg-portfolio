import React from "react";
import Link from "next/link";
import Section from "@/components/ui/Section";

const categories = [
  { label: "books", href: "/recommendations/books" },
  { label: "articles", href: "/recommendations/articles" },
  { label: "papers", href: "/recommendations/papers" },
  { label: "videos", href: "/recommendations/videos" },
  { label: "films", href: "/recommendations/films" },
  { label: "games", href: "/recommendations/games" },
];

const ReadingList = () => {
  return (
    <Section
      id="recommendations"
      title="recommended content."
      moreHref="/recommendations"
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">
        books, articles, papers, videos, films, and games worth your time.
      </p>
      <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
        {categories.map((category, i) => (
          <React.Fragment key={category.href}>
            {i > 0 && <span className="text-gray-300 dark:text-gray-700"> · </span>}
            <Link
              href={category.href}
              className="underline hover:no-underline text-black dark:text-white"
            >
              {category.label}
            </Link>
          </React.Fragment>
        ))}
      </p>
    </Section>
  );
};

export default ReadingList;
