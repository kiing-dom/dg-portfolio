import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const RECOMMENDATION_PAGES = [
  "books",
  "articles",
  "papers",
  "videos",
  "films",
  "games",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllBlogPosts();
  // Home and the blog index change when a post is published, so they carry the
  // newest post's date instead of claiming to be modified on every crawl.
  const latestPost = posts[0] ? new Date(posts[0].date) : undefined;

  return [
    {
      url: SITE_URL,
      lastModified: latestPost,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/experience`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: latestPost,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    {
      url: `${SITE_URL}/recommendations`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    ...RECOMMENDATION_PAGES.map((slug) => ({
      url: `${SITE_URL}/recommendations/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    })),
  ];
}
