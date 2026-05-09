import Navbar from "@/components/ui/Navbar";
import Link from "next/link";
import { papers } from "@/data/recommendations";

export default function PapersPage() {
  return (
    <main className="bg-white dark:bg-black min-h-screen transition-colors">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-8 pt-24">
        <Link
          href="/recommendations"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white transition-colors mb-8"
        >
          ← back to recommended content
        </Link>

        <div className="mb-12">
          <h1 className="text-7xl font-bold text-black dark:text-white mb-4 tracking-tight">
            papers.
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            research papers worth reading.
          </p>
        </div>

        {papers.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">coming soon.</p>
        ) : (
          <div className="space-y-3">
            {papers.map((paper, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-gray-400 mt-0.5">&gt;</span>
                <Link
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {paper.title}{paper.author ? ` — ${paper.author}` : ""}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}