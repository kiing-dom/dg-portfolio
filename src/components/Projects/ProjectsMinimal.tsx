"use client";

import React from "react";

const ProjectsMinimal = () => {
  const projects = [
    {
      title: "cuhlippa",
      description: "a cross-platform clipboard manager using websocket api",
      link: "https://github.com/kiing-dom/cuhlippa",
      year: "2025",
    },
    {
      title: "KeepCode",
      description:
        "a lightweight browser extension to help track leetcode progress. built with vanilla javascript and chrome extension apis.",
      link: "https://github.com/kiing-dom/leetcode-tracker",
      year: "2024",
    },
    {
      title: "chordn8",
      description:
        "an AI web tool for extracting and visualizing chords from audio files, using a multi-stage ML pipeline. python backend with next.js frontend.",
      link: "https://medium.com/@dngi267/piano-lessons-from-an-ai-powered-chord-recognition-app-994a1b71c905",
      year: "2024",
    },
    {
      title: "Perpetua",
      description:
        "a modern note taking application with a handcrafted rich-text editor, markdown support, syntax highlighting and voice note recording.",
      link: "https://github.com/kiing-dom/spotify-insights",
      year: "2024",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-black dark:text-white mb-8">projects.</h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.title} className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-lg font-medium text-black dark:text-white">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gray-300 dark:decoration-gray-600 hover:decoration-black dark:hover:decoration-white transition-colors"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{project.year}</p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-300">
          more projects and code snippets on{" "}
          <a
            href="https://github.com/kiing-dom"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            github
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ProjectsMinimal;
