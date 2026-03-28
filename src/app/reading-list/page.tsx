import Navbar from "@/components/ui/Navbar";
import Link from "next/link";
import { books, articles, papers } from "@/data/readingList";
import type { Metadata } from "next";

// add metadata later
const isEmpty = (books.length === 0 && articles.length === 0 && papers.length === 0);

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
      <div className="mb-16">
        <h1 className="text-7xl font-bold text-black dark:text-white mb-4 tracking-tight">
          reading list.
        </h1>
        <p>
            a collection of books, articles, papers that I have read.
        </p>
      </div>

        {isEmpty ? (
            <p>adding stuff soon.</p>
        ) :
        (
            <div>
                <h2>Books</h2>
                {/* {books.map((book) => (
                    <div key={book.completedAt}></div>
                ))} */}

                <h2>Articles</h2>
                {/* {articles.map((article) => (
                    <div key={article.completedAt}></div>
                ))} */}

                <h2>Papers</h2>
                {/* {papers.map((paper) => (
                    <div key={paper.completedAt}></div>
                ))} */}
            </div>
        )}
      </div>
    </main>
  );
}
