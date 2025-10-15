import { getAllBlogPosts } from "@/lib/blog";
import { ViewCounter } from "@/components/ViewCounter";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";

export default async function BlogsPage() {
  const blogs = getAllBlogPosts();

  return (
    <main className="bg-white dark:bg-black min-h-screen transition-colors">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <div className="mb-16">
          <h1 className="text-7xl font-bold text-black dark:text-white mb-4 tracking-tight">
            All Blogs
          </h1>
          <p className="text-black dark:text-white font-semibold text-lg uppercase">
            some stories and updates
          </p>
        </div>
        <ul className="space-y-4 -mt-4">
          {blogs.map((blog) => (
            <li
              key={blog.date}
              className="border-b border-gray-200 dark:border-gray-800 pb-3"
            >
              <Link href={`/blog/${blog.slug}`} legacyBehavior>
                <a className="text-lg font-semibold text-black dark:text-white hover:underline">
                  {blog.title}
                </a>
              </Link>
              <div className="text-gray-500 dark:text-gray-400 text-xs mt-1 flex items-center gap-2">
                {blog.date}{" "}
                <span>
                  <ViewCounter slug={blog.slug} />
                </span>
              </div>
              <p className="text-black dark:text-white text-sm mt-1 line-clamp-2">
                {blog.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
