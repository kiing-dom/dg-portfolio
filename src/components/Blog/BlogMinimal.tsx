"use client";

import React, { useEffect, useState } from "react";
import { ViewCounter } from "@/components/ViewCounter";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  published: boolean;
}

const BlogMinimal = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blog");
        const posts = await response.json();
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  let blogContent;
  if (loading) {
    blogContent = (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2 animate-pulse">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
            </div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    );
  } else if (blogPosts.length > 0) {
    const recentPosts = blogPosts
        .toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);
    blogContent = recentPosts.map((post) => (
      <div key={post.slug} className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="text-lg font-medium text-black dark:text-white">
            <a
              href={`/blog/${post.slug}`}
              className="underline decoration-gray-300 dark:decoration-gray-600 hover:decoration-black dark:hover:decoration-white transition-colors text-md"
            >
              {post.title}
            </a>
          </h3>
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
            <time>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <ViewCounter slug={post.slug} incrementOnView={false} />
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
          {post.description}
        </p>
      </div>
    ));
  } else {
    blogContent = (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">
          No blog posts found. Give me some time to write damn.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-black dark:text-white">blog.</h2>

      <div className="space-y-6">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          sometimes i write about building things, lessons learned from failed
          projects, or interesting tech discoveries. mostly focused on practical
          stuff that other developers might find useful.
        </p>
        <div className="space-y-6">{blogContent}</div>
        <p className="text-xs text-gray-500 dark:text-white mt-2">
          <a href="/blog" className="underline hover:no-underline">
            View all posts &#8594;
          </a>
        </p>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300">
            in the meantime, you can find some more of my technical writing on{" "}
            <a
              href="https://www.medium.com/@dngi267"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              medium
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogMinimal;
