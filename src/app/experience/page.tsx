import PageShell from "@/components/ui/PageShell";
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
    <PageShell backHref="/#experience">
      <header className="mb-8">
        <h1 className="text-lg font-semibold text-black dark:text-white">
          experience.
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          where i&apos;ve worked
        </p>
      </header>

      <ul className="space-y-8">
        {experiences.map((exp) => (
          <li key={`${exp.company}-${exp.position}`}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4">
              <h2 className="text-[15px] text-black dark:text-white">
                <span className="font-semibold">{exp.position}</span>,{" "}
                {exp.company}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 shrink-0">
                {exp.duration}
              </p>
            </div>
            <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
              {exp.description}
            </p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
