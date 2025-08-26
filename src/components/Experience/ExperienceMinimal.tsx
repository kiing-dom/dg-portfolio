"use client";

import React from 'react';

const ExperienceMinimal = () => {
  const experiences = [
    {
      position: "Software Engineer",
      company: "BG Collections", 
      duration: "Jul 2025 - Present",
      description: "developed scalable ecommerce site and admin management system for small business."
    },
    {
      position: "AI Data Analyst",
      company: "TransPerfect",
      duration: "Jan 2025 - Current", 
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

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-8">experience.</h2>
        <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={`${exp.company}-${exp.position}`} className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">              <h3 className="text-lg font-medium text-black dark:text-white">
                <span className='font-bold'>{exp.position}</span> at{" "}
                <span className="underline decoration-gray-300 dark:decoration-gray-600 hover:decoration-black dark:hover:decoration-white transition-colors">
                  {exp.company}
                </span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{exp.duration}</p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceMinimal;
