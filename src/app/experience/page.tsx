import Navbar from "@/components/ui/Navbar";
import Link from "next/link";
import { experiences } from "@/components/Experience/ExperienceMinimal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Full work history of Dominion Gbadamosi — Software Engineer, AI Data Analyst, Co-Op at General Motors, and more.",
  openGraph: {
    title: "Experience - Dominion Gbadamosi",
    description:
      "Full work history of Dominion Gbadamosi — Software Engineer, AI Data Analyst, Co-Op at General Motors, and more.",
    url: "https://dominion-gbadamosi.xyz/experience",
    images: [
      {
        url: "/assets/images/hero/gradphoto.jpg",
        width: 1200,
        height: 630,
        alt: "Dominion Gbadamosi - Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience - Dominion Gbadamosi",
    description:
      "Full work history of Dominion Gbadamosi — Software Engineer, AI Data Analyst, Co-Op at General Motors, and more.",
    creator: "@_dngi",
  },
  alternates: {
    canonical: "https://dominion-gbadamosi.xyz/experience",
  },
};

export default function ExperiencePage() {
  return (
    <main className="bg-white dark:bg-black min-h-screen transition-colors">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-8 pt-24">
        {/* Back link */}
        <Link
          href="/#experience"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white transition-colors mb-8"
        >
          ← back to home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-7xl font-bold text-black dark:text-white mb-4 tracking-tight">
            Experience
          </h1>
          <p className="text-black dark:text-white font-semibold text-lg uppercase">
            where i&apos;ve worked
          </p>
        </div>

        {/* Experience list */}
        <ul className="space-y-10">
          {experiences.map((exp) => (
            <li
              key={`${exp.company}-${exp.position}`}
              className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <h2 className="text-lg font-medium text-black dark:text-white">
                  <span className="font-bold">{exp.position}</span> at{" "}
                  <span className="underline decoration-gray-300 dark:decoration-gray-600">
                    {exp.company}
                  </span>
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 shrink-0">
                  {exp.duration}
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                {exp.description}
              </p>
            </li>
          ))}
        </ul>

        {/* Footer nav */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/#experience"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            ← back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
