import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

interface PageShellProps {
  /** Renders a back link in the top bar. Omit on the home page. */
  backHref?: string;
  backLabel?: string;
  children: React.ReactNode;
}

/**
 * The single-column page frame: a narrow measure, a quiet top bar, nothing else.
 * Every page uses this so the rhythm is identical across the site.
 */
export default function PageShell({
  backHref,
  backLabel = "back to home",
  children,
}: PageShellProps) {
  return (
    <main className="bg-white dark:bg-black min-h-screen transition-colors">
      <div className="mx-auto w-full max-w-[36rem] px-6 py-12 sm:py-20">
        <div className="flex items-baseline justify-between mb-12">
          {backHref ? (
            <Link
              href={backHref}
              className="text-sm text-gray-500 dark:text-gray-400 link-quiet"
            >
              &#8592; {backLabel}
            </Link>
          ) : (
            <span />
          )}
          <ThemeToggle />
        </div>
        {children}
      </div>
    </main>
  );
}
