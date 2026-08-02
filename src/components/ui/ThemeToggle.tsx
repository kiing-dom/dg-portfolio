"use client";

import React from 'react';
import { useTheme } from '@/components/ThemeProvider';

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  /*
   * Read the live class rather than component state: the server has no idea
   * which theme is active, so anything state-derived renders blank until
   * hydration. Both labels are always in the DOM and CSS picks one, which
   * keeps server and client markup identical.
   */
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="-m-2 p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
      aria-label="Toggle theme"
    >
      {/* Each label names what a click does, not the theme you're already in. */}
      <span className="text-sm inline dark:hidden">dark</span>
      <span className="text-sm hidden dark:inline">light</span>
    </button>
  );
}
