import { getAllBlogPosts } from "@/lib/blog";
import { ViewCounter } from "@/components/ViewCounter";
import IndexRow from "@/components/ui/IndexRow";
import PageShell from "@/components/ui/PageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software engineering, solo development, building profitable products, and my journey from €0 → €10k MRR. Stories and updates from a software engineer.",
  keywords: [
    "Blog",
    "Software Engineering Blog",
    "Solo Developer Blog", 
    "Tech Blog",
    "Programming Blog",
    "Startup Blog",
    "MRR Journey",
    "Product Development"
  ],
  openGraph: {
    title: "Blog - Dominion Gbadamosi",
    description: "Read my thoughts on software engineering, solo development, and building profitable products.",
    url: "/blog",
    images: [
      {
        url: "/assets/images/hero/gradphoto.jpg",
        width: 1200,
        height: 630,
        alt: "Dominion Gbadamosi Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Dominion Gbadamosi",
    description: "Read my thoughts on software engineering, solo development, and building profitable products.",
    creator: "@_dngi",
  },
};

export default async function BlogsPage() {
  const blogs = getAllBlogPosts();
  let lastYear = "";

  return (
    <PageShell backHref="/">
      <header className="mb-8">
        <h1 className="text-lg font-semibold text-black dark:text-white">
          all blogs
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          some stories and updates
        </p>
      </header>

      <div>
        {blogs.map((blog) => {
          const postYear = String(new Date(blog.date).getFullYear());
          const year = postYear === lastYear ? undefined : postYear;
          lastYear = postYear;

          return (
            <IndexRow
              key={blog.slug}
              year={year}
              title={blog.title}
              detail={blog.description}
              href={`/blog/${blog.slug}`}
              meta={<ViewCounter slug={blog.slug} incrementOnView={false} />}
            />
          );
        })}
      </div>
    </PageShell>
  );
}
