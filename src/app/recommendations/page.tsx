import Navbar from "@/components/ui/Navbar";
import Link from "next/link";
import Image from "next/image";
import { books, articles, papers, videos, films, games } from "@/data/recommendations";

export default function ReadingListPage() {
  return (
    <main className="bg-white dark:bg-black min-h-screen transition-colors">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-8 pt-24">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white transition-colors mb-8"
        >
          ← back to home
        </Link>

        <div className="mb-12">
          <h1 className="text-7xl font-bold text-black dark:text-white mb-4 tracking-tight">
            recommended content.
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            things i&apos;ve consumed and think are worth your time.
          </p>
        </div>

        <div className="space-y-12">
          {/* Books */}
          <section>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-2xl font-bold text-black dark:text-white">books.</h2>
              <Link
                href="/recommendations/books"
                className="text-xs text-gray-500 dark:text-gray-400 hover:underline"
              >
                view all &#8594;
              </Link>
            </div>
            {books.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">coming soon.</p>
            ) : (
              <div className="space-y-2">
                {books.slice(0, 3).map((book, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-gray-400 mt-0.5">&gt;</span>
                    <Link
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      {book.title}{book.author ? ` — ${book.author}` : ""}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Articles */}
          <section>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-2xl font-bold text-black dark:text-white">articles.</h2>
              <Link
                href="/recommendations/articles"
                className="text-xs text-gray-500 dark:text-gray-400 hover:underline"
              >
                view all &#8594;
              </Link>
            </div>
            {articles.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">coming soon.</p>
            ) : (
              <div className="space-y-2">
                {articles.slice(0, 3).map((article, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-gray-400 mt-0.5">&gt;</span>
                    <Link
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      {article.title}{article.author ? ` — ${article.author}` : ""}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Papers */}
          <section>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-2xl font-bold text-black dark:text-white">papers.</h2>
              <Link
                href="/recommendations/papers"
                className="text-xs text-gray-500 dark:text-gray-400 hover:underline"
              >
                view all &#8594;
              </Link>
            </div>
            {papers.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">coming soon.</p>
            ) : (
              <div className="space-y-2">
                {papers.slice(0, 3).map((paper, i) => (
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
          </section>

          {/* YouTube Videos */}
          <section>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-2xl font-bold text-black dark:text-white">videos.</h2>
              <Link
                href="/recommendations/videos"
                className="text-xs text-gray-500 dark:text-gray-400 hover:underline"
              >
                view all &#8594;
              </Link>
            </div>
            {videos.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">coming soon.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {videos.slice(0, 3).map((video, i) => (
                  <Link
                    key={i}
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative aspect-video overflow-hidden rounded bg-gray-100 dark:bg-gray-900 mb-2">
                      <Image
                        src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:opacity-80 transition-opacity"
                      />
                    </div>
                    <p className="text-xs text-black dark:text-white leading-tight line-clamp-2">
                      {video.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {video.channel}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </section>

          {/* Films */}
          <section>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-2xl font-bold text-black dark:text-white">films.</h2>
              <Link
                href="/recommendations/films"
                className="text-xs text-gray-500 dark:text-gray-400 hover:underline"
              >
                view all &#8594;
              </Link>
            </div>
            {films.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">coming soon.</p>
            ) : (
              <div className="space-y-2">
                {films.slice(0, 3).map((film, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-gray-400 mt-0.5">&gt;</span>
                    {film.link ? (
                      <Link
                        href={film.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        {film.title}{film.year ? ` (${film.year})` : ""}
                      </Link>
                    ) : (
                      <span>{film.title}{film.year ? ` (${film.year})` : ""}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Games */}
          <section>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-2xl font-bold text-black dark:text-white">games.</h2>
              <Link
                href="/recommendations/games"
                className="text-xs text-gray-500 dark:text-gray-400 hover:underline"
              >
                view all &#8594;
              </Link>
            </div>
            {games.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">coming soon.</p>
            ) : (
              <div className="space-y-2">
                {games.slice(0, 3).map((game, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-gray-400 mt-0.5">&gt;</span>
                    {game.link ? (
                      <Link
                        href={game.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        {game.title}{game.year ? ` (${game.year})` : ""}
                      </Link>
                    ) : (
                      <span>{game.title}{game.year ? ` (${game.year})` : ""}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}