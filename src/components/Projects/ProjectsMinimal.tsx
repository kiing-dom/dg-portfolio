import React from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { HoverPreviewLink } from "@/components/ui/HoverPreview";
import { previews } from "@/components/ui/previews";

/** Also read by /llms.txt, so a new project is listed there the day it's added here. */
export const projects = [
  {
    title: "luttie",
    link: "https://luttie.app",
    description:
      "building a web alternative for color grading + LUT creation. 4.5k+ users currently",
    preview: previews.luttie,
    icon: "/assets/images/projects/luttie-icon.png",
  },
  {
    title: "tau",
    link: "https://trytau.app",
    description: "building the #1 timelapse app in the world",
    preview: previews.tau,
    icon: "/assets/images/projects/tau-icon.png",
  },
];

const ProjectsMinimal = () => {
  return (
    <Section id="projects" title="projects.">
      {/* Touch devices get a stacked list instead of the icon row; see below. */}
      <div className="flex flex-wrap items-center gap-3 [@media(hover:none)]:flex-col [@media(hover:none)]:items-start">
        {projects.map((project) => (
          <HoverPreviewLink
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            preview={{ ...project.preview, description: project.description }}
            className="flex items-center gap-3 rounded-[10px] transition-transform hover:-translate-y-0.5"
          >
            <Image
              src={project.icon}
              alt=""
              width={80}
              height={80}
              className="h-10 w-10 shrink-0 rounded-[10px] ring-1 ring-black/10 dark:ring-white/15"
            />
            {/*
             * The hover bubble is aria-hidden and needs a mouse, so the name
             * and description it shows are repeated here: hidden visually where
             * hovering works (screen readers and crawlers still get it), and
             * shown beside the icon on touch devices, which can't hover.
             */}
            <span className="sr-only text-sm leading-snug [@media(hover:none)]:not-sr-only">
              <span className="text-black dark:text-white">{project.title}</span>
              <span className="text-gray-500 dark:text-gray-400">
                {" "}
                - {project.description}
              </span>
            </span>
          </HoverPreviewLink>
        ))}
        <HoverPreviewLink
          href="https://github.com/kiing-dom"
          target="_blank"
          rel="noopener noreferrer"
          preview={previews.github}
          className="inline-flex h-10 items-center gap-2 rounded-[10px] border border-gray-200 px-3 text-sm text-black transition-colors hover:border-link hover:text-link dark:border-gray-800 dark:text-white"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
            <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
          </svg>
          view more on github
        </HoverPreviewLink>
      </div>
    </Section>
  );
};

export default ProjectsMinimal;
