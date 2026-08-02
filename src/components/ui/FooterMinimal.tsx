import React from "react";

const links = [
  {
    label: "resume",
    href: "https://drive.google.com/file/d/1w2rVPxk8DvZrMlr6CdMwgBlkUhPE4qsb/view",
  },
  { label: "github", href: "https://www.github.com/kiing-dom" },
  { label: "twitter", href: "https://www.twitter.com/_dngi" },
  { label: "linkedin", href: "https://www.linkedin.com/in/dominion-gbadamosi" },
  { label: "medium", href: "https://www.medium.com/@dngi267" },
  { label: "discord", href: "https://discord.gg/scf7jnQjDY" },
];

export default function FooterMinimal() {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        p.s: if you want to get in touch, email me at{" "}
        <a
          href="mailto:dom1gbadamosi@gmail.com"
          className="underline hover:no-underline text-black dark:text-white"
        >
          dom1gbadamosi@gmail.com
        </a>
        {". i usually respond to every email as long as it's short and to the point."}
      </p>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        {links.map((link, i) => (
          <React.Fragment key={link.href}>
            {i > 0 && (
              <span className="text-gray-300 dark:text-gray-700"> · </span>
            )}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline text-black dark:text-white"
            >
              {link.label}
            </a>
          </React.Fragment>
        ))}
      </p>

      <p className="mt-6 text-xs text-gray-400 dark:text-gray-600">
        &copy; {new Date().getFullYear()} dominion gbadamosi
      </p>
    </footer>
  );
}
