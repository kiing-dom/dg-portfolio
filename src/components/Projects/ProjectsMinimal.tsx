"use client";

import React from "react";

const ProjectsMinimal = () => {
  const projects = [
    {
      title: "Tau",
      description: "building the #1 timelapse app in the world. currently at $20 revenue",
      link: "https://trytau.app",
      year: "2026"
    },
    {
      title: "fuzc",
      description:
      "a fuzzy finder for comments written in rust",
      link: "https://github.com/kiing-dom/fuzc",
      year: "2025",
    },
    {
      title: "url shortener",
      description: "a url shortener written in go, scaled with kubernetes and redis",
      link: "https://github.com/kiing-dom/url-shortener-go",
      year: "2026",
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
