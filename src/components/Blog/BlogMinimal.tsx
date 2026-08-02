"use client";

import React, { useEffect, useState } from "react";
import { ViewCounter } from "@/components/ViewCounter";
import IndexRow from "@/components/ui/IndexRow";
import Section from "@/components/ui/Section";

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
    blogContent = [1, 2, 3].map((i) => (
      <div
        key={i}
        className="grid grid-cols-[2.5rem_1fr] gap-x-3 items-baseline py-2 animate-pulse"
      >
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-8" />
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
      </div>
    ));
  } else if (blogPosts.length > 0) {
    const recentPosts = blogPosts
      .toSorted(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
      .slice(0, 3);

    let lastYear = "";
    blogContent = recentPosts.map((post) => {
      const postYear = String(new Date(post.date).getFullYear());
      const year = postYear === lastYear ? undefined : postYear;
      lastYear = postYear;

      return (
        <IndexRow
          key={post.slug}
          year={year}
          title={post.title}
          href={`/blog/${post.slug}`}
          meta={<ViewCounter slug={post.slug} incrementOnView={false} />}
        />
      );
    });
  } else {
    blogContent = (
      <p className="text-sm text-gray-500 dark:text-gray-400 py-2">
        No blog posts found. Give me some time to write damn.
      </p>
    );
  }

  return (
    <Section id="blog" title="blog." moreHref="/blog" moreLabel="view all posts">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        topics range from technical, financial, personal, to just random
        thoughts
      </p>
      <div>{blogContent}</div>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        in the meantime, you can find some more of my technical writing on{" "}
        <a
          href="https://www.medium.com/@dngi267"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          medium
        </a>
        {"."}
      </p>
    </Section>
  );
};

export default BlogMinimal;
