import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogPosts, type BlogPost } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import Link from "next/link";
import PageShell from "@/components/ui/PageShell";
import { ViewCounter } from "@/components/ViewCounter";
import {
  PERSON_ID,
  breadcrumbLd,
  canonicalFor,
  ldJson,
  ogImageFor,
} from "@/lib/seo";
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from "@/lib/site";
import type { Metadata } from "next";
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

/** The post's own social card: its title and description on the shared design. */
const postImage = (post: BlogPost) =>
  ogImageFor({
    eyebrow: "blog",
    title: post.title,
    description: post.description || undefined,
  });

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  // An unpublished post 404s below, so it must not be indexable either.
  if (!post || !post.published) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const url = canonicalFor(`/blog/${post.slug}`);
  // A post with no description of its own falls back to its title.
  const description = post.description || post.title;
  const publishedTime = new Date(post.date).toISOString();
  const image = postImage(post);

  return {
    title: post.title,
    description,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "en_US",
      siteName: SITE_NAME,
      url,
      title: post.title,
      description,
      publishedTime,
      modifiedTime: publishedTime,
      authors: [SITE_URL],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      creator: TWITTER_HANDLE,
      images: [image.url],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post || !post.published) {
    notFound();
  }

  const path = `/blog/${post.slug}`;
  const isoDate = new Date(post.date).toISOString();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description || post.title,
    image: `${SITE_URL}${postImage(post).url}`,
    datePublished: isoDate,
    dateModified: isoDate,
    url: canonicalFor(path),
    inLanguage: "en",
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalFor(path) },
  };

  const crumbsLd = breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path },
  ]);

  return (
    <PageShell backHref="/blog" backLabel="back to blog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJson(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJson(crumbsLd) }}
      />
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
