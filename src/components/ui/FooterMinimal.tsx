"use client";

import React from "react";

export default function FooterMinimal() {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="text-gray-600 dark:text-gray-300">
        <p className="text-md mb-4">
          p.s: if you want to get in touch, email me at{" "}
          <a
            href="mailto:dom1gbadamosi@gmail.com"
            className="underline hover:no-underline"
          >
            dom1gbadamosi@gmail.com
          </a>.
           i usually respond to every email under 300 characters with a clear
          ask.
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} dominion gbadamosi
        </p>
      </div>
    </footer>
  );
}
