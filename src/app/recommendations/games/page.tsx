import PageShell from "@/components/ui/PageShell";
import RecommendationList from "@/components/Recommendations/RecommendationList";
import { games } from "@/data/recommendations";

export default function GamesPage() {
  return (
    <PageShell backHref="/recommendations" backLabel="back to recommended content">
      <header className="mb-8">
        <h1 className="text-sm font-semibold text-black dark:text-white">
          games.
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          games worth playing.
        </p>
      </header>

      <RecommendationList
        items={games.map((g) => ({ ...g, credit: g.developer }))}
      />
    </PageShell>
  );
}
