import React from "react";
import Link from "next/link";

const ReadingList = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-black dark:text-white">
        recommended content.
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        books, articles, papers, videos, films, and games worth your time.
      </p>
      <Link
        href="/recommendations"
        className="inline-block text-sm underline hover:no-underline text-black dark:text-white"
      >
        view recommendations &#8594;
      </Link>
    </div>
  );
};

export default ReadingList;