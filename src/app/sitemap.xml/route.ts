import { getAllBlogPosts } from "@/lib/blog";

export async function GET() {
  const baseUrl = "https://dominion-gbadamosi.xyz";

  const posts = getAllBlogPosts().filter((p) => p.published);

  const urls = [
    { loc: `${baseUrl}/`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/blog`, lastmod: new Date().toISOString() },
    ...posts.map((p) => ({ loc: `${baseUrl}/blog/${p.slug}`, lastmod: new Date(p.date).toISOString() })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (u) => `
      <url>
        <loc>${u.loc}</loc>
        <lastmod>${u.lastmod}</lastmod>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
