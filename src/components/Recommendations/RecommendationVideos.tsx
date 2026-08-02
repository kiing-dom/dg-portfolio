import React from "react";
import Image from "next/image";
import type { VideoItem } from "@/data/recommendations";

interface RecommendationVideosProps {
  items: VideoItem[];
  limit?: number;
}

export default function RecommendationVideos({
  items,
  limit,
}: RecommendationVideosProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-gray-500 dark:text-gray-400">coming soon.</p>
    );
  }

  const shown = limit ? items.slice(0, limit) : items;

  return (
    <div className="grid grid-cols-2 gap-4">
      {shown.map((video) => (
        <a
          key={video.videoId}
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
              sizes="(max-width: 640px) 45vw, 260px"
              className="object-cover group-hover:opacity-80 transition-opacity"
            />
          </div>
          <p className="text-xs leading-tight text-black dark:text-white line-clamp-2">
            {video.title}
          </p>
          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
            {video.channel}
          </p>
        </a>
      ))}
    </div>
  );
}
