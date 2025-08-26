"use client";

import React from 'react';

const BlogMinimal = () => {
  // Placeholder blog posts - you can replace these with real content later
  const blogPosts = [
    {
      title: "Building a Minimal Portfolio",
      description: "thoughts on creating clean, focused personal websites that actually convert.",
      date: "coming soon",
      link: "#"
    },
    {
      title: "Lessons from Building Side Projects",
      description: "what i've learned from shipping personal projects and why most of them fail.",
      date: "coming soon", 
      link: "#"
    },
    {
      title: "The Tech Stack That Actually Matters",
      description: "cutting through the noise to focus on tools that deliver real value.",
      date: "coming soon",
      link: "#"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-black dark:text-white">blog.</h2>
      
      <div className="space-y-6">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          sometimes i write about building things, lessons learned from failed projects, 
          or interesting tech discoveries. mostly focused on practical stuff that other developers might find useful.
        </p>
        
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <div key={post.title} className="space-y-2">              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-lg font-medium text-black dark:text-white">
                  {post.date === "coming soon" ? (
                    <span className="text-gray-400 dark:text-gray-500">{post.title}</span>
                  ) : (
                    <a 
                      href={post.link}
                      className="underline decoration-gray-300 dark:decoration-gray-600 hover:decoration-black dark:hover:decoration-white transition-colors"
                    >
                      {post.title}
                    </a>
                  )}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{post.date}</p>
              </div>              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {post.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300">
            in the meantime, you can find my technical writing on{" "}
            <a
              href="https://www.medium.com/@dngi267" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              medium
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogMinimal;
