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
            {/* {books.slice(0, 2).map((book) =>(
                            <div key={book.dateCompleted}></div>
                        ))} */}
            {/* {articles.slice(0, 2).map((book) =>(
                            <div key={book.dateCompleted}></div>
                        ))} */}
            {/* {papers.slice(0, 2).map((book) =>(
                            <div key={book.dateCompleted}></div>
                        ))} */}
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
