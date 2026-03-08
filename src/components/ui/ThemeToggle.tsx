"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Resolve the effective visual theme for the label
  let resolvedTheme: 'light' | 'dark' = 'light';
  if (theme === 'system') {
    if (mounted) {
      resolvedTheme = globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  } else {
    resolvedTheme = theme;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  // Avoid rendering the label until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors text-sm font-medium"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors text-sm font-medium"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'light' ? 'dark' : 'light'}
    </button>
  );
}
