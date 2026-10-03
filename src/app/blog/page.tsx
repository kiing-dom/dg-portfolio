import { getAllBlogPosts } from "@/lib/blog";
import { ViewCounter } from "@/components/ViewCounter";
import IndexRow from "@/components/ui/IndexRow";
import PageShell from "@/components/ui/PageShell";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/blog",
  title: "Blog",
  description:
    "Writing by Dominion Gbadamosi on software engineering and building products solo: technical deep dives, build logs and opinion.",
});

export default async function BlogsPage() {
  const blogs = getAllBlogPosts();
  let lastYear = "";

  return (
    <PageShell backHref="/">
      <header className="mb-8">
        <h1 className="text-sm font-semibold text-black dark:text-white">
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
