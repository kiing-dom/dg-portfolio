import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import Link from "next/link";
import PageShell from "@/components/ui/PageShell";
import { ViewCounter } from "@/components/ViewCounter";
import "katex/dist/katex.min.css";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: [
      "Dominion Gbadamosi",
      "Software Engineer",
      "Blog",
      "Solo Developer",
      "Tech Blog",
      "Programming",
      "Development"
    ],
    authors: [{ name: "Dominion Gbadamosi" }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Dominion Gbadamosi"],
      url: `https://dominion-gbadamosi.xyz/blog/${post.slug}`,
      images: [
        {
          url: "/assets/images/hero/gradphoto.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@_dngi",
      images: ["/assets/images/hero/gradphoto.jpg"],
    },
    alternates: {
      canonical: `https://dominion-gbadamosi.xyz/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post || !post.published) {
    notFound();
  }
  return (
    <PageShell backHref="/blog" backLabel="back to blog">
      <header className="mb-8">
        <h1 className="text-sm font-semibold text-black dark:text-white">
          {post.title}
        </h1>
        <div className="mt-2 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <ViewCounter slug={post.slug} />
        </div>
        {post.description && (
          <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400">
            {post.description}
          </p>
        )}
      </header>
      {/* Post content */}
      <article className="text-sm">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeRaw, rehypeKatex]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-base font-semibold text-black dark:text-white mt-8 mb-3 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-sm font-semibold text-black dark:text-white mt-8 mb-3">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-sm font-medium text-black dark:text-white mt-6 mb-2">
                  {children}
                </h3>
              ),
              p: ({ children, style }) => (
                <p
                  className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                  style={style}
                >
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-700 dark:text-gray-300">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-2 my-4 text-gray-600 dark:text-gray-400 italic">
                  {children}
                </blockquote>
              ),
              code: ({ children, className }) => {
                const isInline = !className;
                if (isInline) {
                  return (
                    <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800 dark:text-gray-200">
                      {children}
                    </code>
                  );
                }
                return (
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
                    <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                      {children}
                    </code>
                  </pre>
                );
              },
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="link"
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href?.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-black dark:text-white">
                  {children}
                </strong>
              ),
              img: ({ src, alt, width, style }) => (
                <div className="flex justify-center my-4 drop-shadow-md">
                  <img
                    src={src}
                    alt={alt || ""}
                    width={width}
                    style={style}
                    className="h-auto rounded-lg max-w-full"
                  />
                </div>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
      </article>
      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <Link
          href="/"
          className="text-sm text-gray-500 dark:text-gray-400 link-quiet"
        >
          &#8592; back to home
        </Link>
      </footer>
    </PageShell>
  );
}
