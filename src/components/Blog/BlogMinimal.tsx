import React from "react";
import { ViewCounter } from "@/components/ViewCounter";
import IndexRow from "@/components/ui/IndexRow";
import Section from "@/components/ui/Section";
import { getAllBlogPosts } from "@/lib/blog";

/**
 * Rendered on the server so the post links are in the page's HTML. Fetching
 * them from /api/blog after load left the homepage with no links to the posts
 * for a crawler that doesn't run scripts.
 */
const BlogMinimal = () => {
  // Already sorted newest first.
  const recentPosts = getAllBlogPosts().slice(0, 3);

  let blogContent;
  if (recentPosts.length > 0) {
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
