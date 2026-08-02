import React from 'react';
import IndexRow from '@/components/ui/IndexRow';
import Section from '@/components/ui/Section';

type Experience = {
  position: string;
  company: string;
  duration: string;
  description?: string;
}

export const experiences: Experience[] = [
  {
    position: "Software Engineer",
    company: "Google",
    duration: "Feb 2026 - Present",
    description: "currently in team matching"
  },
  {
    position: "Founder/Software Engineer",
    company: "Iwaju Labs",
    duration: "Nov 2025 - Present",
    description: "hub for all the personal project I'm shipping"
  },
  {
    position: "Software Engineer",
    company: "BG Collections",
    duration: "Jul 2025 - Present",
    description: "developed scalable ecommerce site and admin management system for small business."
  },
  {
    position: "AI Data Analyst",
    company: "TransPerfect",
    duration: "Jan 2025 - Jun 2025",
    description: "contributing to confidential machine learning and data-driven initiatives for a private client through a third-party contractor."
  },
  {
    position: "Software Engineering Fellow",
    company: "Headstarter AI",
    duration: "Jul 2024 - Sep 2024",
    description: "developed five innovative AI-based applications, each with unique use cases and technical challenges. deployed a final project with the aim of reaching 1000 users. participated in hackathons with cross-functional teams."
  },
  {
    position: "Student Tutor",
    company: "University of Limerick",
    duration: "Apr 2023 - Jun 2024",
    description: "provided tutoring services to fellow students in subjects such as OOP, Software Architecture + Design Patterns. mentored students through complex algorithmic problems, improving their problem-solving skills."
  },
  {
    position: "Co-Op Software Engineer",
    company: "General Motors",
    duration: "Jun 2022 - Dec 2022",
    description: "co-developed a company-wide internal management system utilizing Angular for front-end and Java for back-end, improving departmental efficiency by over 30%."
  }
];

/** "Feb 2026 - Present" -> { start: "2026", end: "Present" } */
export function splitDuration(duration: string) {
  const [from, to] = duration.split(" - ");
  const parts = from.trim().split(" ");
  return { start: parts.at(-1)!, end: (to ?? "").trim() };
}

const ExperienceMinimal = () => {
  const preview = experiences.slice(0, 3);
  let lastYear = "";

  return (
    <Section id="experience" title="experience." moreHref="/experience">
      <div>
        {preview.map((exp) => {
          const { start, end } = splitDuration(exp.duration);
          const year = start === lastYear ? undefined : start;
          lastYear = start;

          return (
            <IndexRow
              key={`${exp.company}-${exp.position}`}
              year={year}
              title={`${exp.position}, ${exp.company}`}
              meta={end}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default ExperienceMinimal;
