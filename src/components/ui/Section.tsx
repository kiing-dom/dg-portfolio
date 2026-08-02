import React from "react";
import Link from "next/link";

interface SectionProps {
  id?: string;
  title: string;
  /** Optional "view all" affordance, right-aligned against the heading. */
  moreHref?: string;
  moreLabel?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  title,
  moreHref,
  moreLabel = "view all",
  children,
}: SectionProps) {
  return (
    <section id={id} className="mt-14">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-[15px] font-semibold text-black dark:text-white">
          {title}
        </h2>
        {moreHref && (
          <Link
            href={moreHref}
            className="text-xs text-gray-500 dark:text-gray-400 link-quiet"
          >
            {moreLabel} &#8594;
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
