import React from "react";
import Link from "next/link";
import { books, articles, papers } from "@/data/readingList";

const ReadingList = () => {
  const isEmpty =
    books.length === 0 && articles.length === 0 && papers.length === 0;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-black dark:text-white">
        reading list.
      </h2>
      {isEmpty ? (
        <p className="text-gray-600 dark:text-gray-300">adding to it soon.</p>
      ) : (
        <>
          <div>
            {books.length > 0 ? (
              books.slice(0, 2).map((book) => (
                <div key={book.dateCompleted?.toISOString()}>
                  &gt;&nbsp;
                  <Link
                    href={book.link}
                    className="underline decoration-gray-600 dark:decoration-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {book.title} - {book.author}
                  </Link>
                </div>
              ))
            ) : (
              <p></p>
            )}
            {articles.length > 0 ? (
              articles.slice(0, 2).map((article) => (
                <div key={article.dateCompleted?.toISOString()}>
                  &gt;&nbsp;
                  <Link
                    href={article.link}
                    className="underline decoration-gray-600 dark:decoration-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {article.title} - {article.author}
                  </Link>
                </div>
              ))
            ) : (
              <p></p>
            )}
            {papers.slice(0, 2).map((paper) => (
              <div key={paper.dateCompleted?.toISOString()}>
                &gt;&nbsp;
                <Link
                  href={paper.link}
                  className="underline decoration-gray-600 dark:decoration-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {paper.title} - {paper.author}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 dark:text-white mt-2">
            <Link href="/reading-list" className="underline hover:no-underline">
              View reading list &#8594;
            </Link>
          </p>
        </>
      )}
    </div>
  );
};

export default ReadingList;
