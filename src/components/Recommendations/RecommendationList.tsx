import React from "react";

export interface RecommendationEntry {
  title: string;
  /** Author, director, developer — whatever the secondary credit is. */
  credit?: string;
  year?: number;
  link?: string;
}

interface RecommendationListProps {
  items: RecommendationEntry[];
  limit?: number;
}

export default function RecommendationList({
  items,
  limit,
}: RecommendationListProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-gray-500 dark:text-gray-400">coming soon.</p>
    );
  }

  const shown = limit ? items.slice(0, limit) : items;

  return (
    <ul className="space-y-2">
      {shown.map((item) => {
        const label = `${item.title}${item.year ? ` (${item.year})` : ""}`;

        return (
          <li
            key={`${item.title}-${item.year ?? ""}`}
            className="grid grid-cols-[1rem_1fr] gap-x-1 text-sm"
          >
            <span className="text-gray-300 dark:text-gray-700">&gt;</span>
            <span className="text-gray-500 dark:text-gray-400">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline text-black dark:text-white"
                >
                  {label}
                </a>
              ) : (
                <span className="text-black dark:text-white">{label}</span>
              )}
              {item.credit && ` — ${item.credit}`}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
