import React from "react";
import IndexRow from "@/components/ui/IndexRow";
import Section from "@/components/ui/Section";

const projects = [
  {
    title: "luttie",
    description:
      "building a web alternative for color grading + LUT creation. ~130 user currently",
    link: "https://luttie.app",
    year: "2026",
    category: "Product",
  },
  {
    title: "Tau",
    description:
      "building the #1 timelapse app in the world. currently at ~$40 revenue",
    link: "https://trytau.app",
    year: "2026",
    category: "Product",
  },
  {
    title: "fuzc",
    description: "a fuzzy finder for comments written in rust",
    link: "https://github.com/kiing-dom/fuzc",
    year: "2025",
    category: "Open source",
  },
];

const ProjectsMinimal = () => {
  let lastYear = "";

  return (
    <Section id="projects" title="projects.">
      <div>
        {projects.map((project) => {
          const year = project.year === lastYear ? undefined : project.year;
          lastYear = project.year;

          return (
            <IndexRow
              key={project.title}
              year={year}
              title={project.title}
              detail={project.description}
              meta={project.category}
              href={project.link}
            />
          );
        })}
      </div>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        more projects and code snippets on{" "}
        <a
          href="https://github.com/kiing-dom"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          github
        </a>
        {"."}
      </p>
    </Section>
  );
};

export default ProjectsMinimal;
