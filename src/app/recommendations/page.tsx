import PageShell from "@/components/ui/PageShell";
import Section from "@/components/ui/Section";
import RecommendationList from "@/components/Recommendations/RecommendationList";
import RecommendationVideos from "@/components/Recommendations/RecommendationVideos";
import {
  books,
  articles,
  papers,
  videos,
  films,
  games,
} from "@/data/recommendations";

export default function ReadingListPage() {
  return (
    <PageShell backHref="/">
      <header className="mb-8">
        <h1 className="text-sm font-semibold text-black dark:text-white">
          recommended content.
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          things i&apos;ve consumed and think are worth your time.
        </p>
      </header>

      <Section title="books." moreHref="/recommendations/books">
        <RecommendationList
          items={books.map((b) => ({ ...b, credit: b.author }))}
          limit={3}
        />
      </Section>

      <Section title="articles." moreHref="/recommendations/articles">
        <RecommendationList
          items={articles.map((a) => ({ ...a, credit: a.author }))}
          limit={3}
        />
      </Section>

      <Section title="papers." moreHref="/recommendations/papers">
        <RecommendationList
          items={papers.map((p) => ({ ...p, credit: p.author }))}
          limit={3}
        />
      </Section>

      <Section title="videos." moreHref="/recommendations/videos">
        <RecommendationVideos items={videos} limit={4} />
      </Section>

      <Section title="films." moreHref="/recommendations/films">
        <RecommendationList
          items={films.map((f) => ({ ...f, credit: f.director }))}
          limit={3}
        />
      </Section>

      <Section title="games." moreHref="/recommendations/games">
        <RecommendationList
          items={games.map((g) => ({ ...g, credit: g.developer }))}
          limit={3}
        />
      </Section>
    </PageShell>
  );
}
