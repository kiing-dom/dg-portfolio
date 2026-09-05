import React from "react";
import Link from "next/link";
import {
  HoverPreviewLink,
  type PreviewContent,
} from "@/components/ui/HoverPreview";

interface IndexRowProps {
  /** Only shown on the first row of a year group, so the gutter reads as a spine. */
  year?: string;
  title: string;
  /** Muted continuation of the title on the same line. */
  detail?: string;
  /** Right-aligned category or status. */
  meta?: React.ReactNode;
  href?: string;
  /** Optional cursor-following preview shown while the row is hovered. */
  preview?: PreviewContent;
}

const rowClass =
  "grid grid-cols-[2.5rem_1fr] sm:grid-cols-[2.5rem_1fr_auto] gap-x-3 items-baseline " +
  "-mx-2 px-2 py-2 rounded";

const interactiveClass =
  " group transition-colors hover:bg-gray-100/70 dark:hover:bg-gray-900";

/** Only reacts when the row is a link — the `group` class gates it. */
const titleClass =
  "decoration-1 underline-offset-2 transition-colors " +
  "group-hover:text-link group-hover:underline group-hover:decoration-link/70";

export default function IndexRow({
  year,
  title,
  detail,
  meta,
  href,
  preview,
}: IndexRowProps) {
  const isExternal = href?.startsWith("http");

  const inner = (
    <>
      <span className="text-sm tabular-nums text-gray-400 dark:text-gray-500">
        {year}
      </span>
      <span className="text-sm leading-6 text-black dark:text-white">
        <span className={titleClass}>{title}</span>
        {detail && (
          <span className="font-normal text-gray-500 dark:text-gray-400">
            {" "}
            - {detail}
          </span>
        )}
      </span>
      {meta && (
        <span className="col-start-2 sm:col-start-3 mt-0.5 sm:mt-0 text-xs sm:text-sm text-gray-500 dark:text-gray-400 sm:text-right whitespace-nowrap">
          {meta}
        </span>
      )}
    </>
  );

  if (!href) {
    return <div className={rowClass}>{inner}</div>;
  }

  if (isExternal) {
    if (preview) {
      return (
        <HoverPreviewLink
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={rowClass + interactiveClass}
          preview={preview}
        >
          {inner}
        </HoverPreviewLink>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={rowClass + interactiveClass}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={rowClass + interactiveClass}>
      {inner}
    </Link>
  );
}
