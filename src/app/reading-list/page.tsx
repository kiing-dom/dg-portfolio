import Navbar from "@/components/ui/Navbar";
import Link from "next/link";
import { books, articles, papers } from "@/data/readingList";
import type { Metadata } from "next";

// add metadata later
const isEmpty =
  books.length === 0 && articles.length === 0 && papers.length === 0;

export default function ReadingListPage() {
  return (
    <main className="bg-white dark:bg-black min-h-screen transition-colors">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-8 pt-24">
        {/* Back link */}
        <Link
          href="/#experience"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white transition-colors mb-8"
        >
          ← back to home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-7xl font-bold text-black dark:text-white mb-4 tracking-tight">
            reading list.
          </h1>
          <p>a collection of books, articles, papers that I have read.</p>
        </div>

        {isEmpty ? (
          <p>adding stuff soon.</p>
        ) : (
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">books.</h2>
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
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  I'm reading some books rn dw.
                </p>
              )}
            </div>

            <div className="mb-4">
            <h2 className="text-2xl font-bold">articles.</h2>
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
              <p className="text-sm text-gray-600 dark:text-gray-300">
                reading some articles too.
              </p>
            )}
            </div>

            <h2 className="text-2xl font-bold">papers.</h2>
            {papers.map((paper) => (
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
        )}
      </div>
    </main>
  );
}
