import { getBlogPost } from "@/lib/blog";

interface HeadProps {
  params: {
    slug: string;
  };
}

export default function Head({ params }: Readonly<HeadProps>) {
  const post = getBlogPost(params.slug);

  if (!post) return null;

  const canonical = `https://dominion-gbadamosi.xyz/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description || post.title,
    image: [
      "https://dominion-gbadamosi.xyz/assets/images/hero/gradphoto.jpg"
    ],
    author: {
      "@type": "Person",
      name: "Dominion Gbadamosi",
    },
    publisher: {
      "@type": "Organization",
      name: "Dominion Gbadamosi",
      logo: {
        "@type": "ImageObject",
        url: "https://dominion-gbadamosi.xyz/assets/images/hero/gradphoto.jpg",
      },
    },
    datePublished: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  } as const;

  return (
    <>
      <link rel="canonical" href={canonical} />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
