import Navbar from "@/components/ui/Navbar";
import Link from "next/link";
import Image from "next/image";
import { videos } from "@/data/recommendations";

export default function VideosPage() {
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
            videos.
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            youtube videos worth watching.
          </p>
        </div>

        {videos.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">coming soon.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {videos.map((video, i) => (
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
      </div>
    </main>
  );
}