import { experiences } from "@/components/Experience/ExperienceMinimal";
import { projects } from "@/components/Projects/ProjectsMinimal";
import { getAllBlogPosts } from "@/lib/blog";
import { EMAIL, PROFILES, SITE_URL } from "@/lib/site";

// Built once at build time; everything it reads is in the repo.
export const dynamic = "force-static";

/**
 * Served at /llms.txt: a plain summary for AI assistants answering questions
 * about who this is. Generated from the same data the pages render, so the
 * work history, projects and posts can't drift out of date.
 *
 * Links must be absolute and written as Markdown links, and the H1 must stay:
 * validators report a file of bare paths as containing no links at all.
 */
export function GET() {
  const posts = getAllBlogPosts();

  const body = `# Dominion Gbadamosi

> Software engineer based in Ireland. Founder of DNGI, building Luttie (browser color grading) and Tau (timelapse recorder). Currently open to backend and full stack roles. Also known as Dom, dngi and Kiing Dom.

## Projects

${projects
  .map((p) => `- [${p.title}](${p.link}): ${p.description}`)
  .join("\n")}
- [More on GitHub](${PROFILES.github}): other projects and code

## Experience

${experiences
  .map(
    (e) =>
      `- ${e.position}, ${e.company} (${e.duration})${
        e.description ? `: ${e.description}` : ""
      }`
  )
  .join("\n")}

## Writing

${posts
  .map(
    (p) =>
      `- [${p.title}](${SITE_URL}/blog/${p.slug}) (${p.date})${
        p.description ? `: ${p.description}` : ""
      }`
  )
  .join("\n")}

## Key pages

- [Home](${SITE_URL}/): overview, projects and recent posts
- [Experience](${SITE_URL}/experience): full work history- [Blog](${SITE_URL}/blog): every post
- [Recommendations](${SITE_URL}/recommendations): books, articles, papers, videos, films and games

## Contact

- Email: ${EMAIL}
- [GitHub](${PROFILES.github})
- [LinkedIn](${PROFILES.linkedin})
- [X / Twitter](${PROFILES.twitter})
- [Medium](${PROFILES.medium})
- [YouTube](${PROFILES.youtube})
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
