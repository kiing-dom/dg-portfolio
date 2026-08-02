import PageShell from "@/components/ui/PageShell";
import RecommendationList from "@/components/Recommendations/RecommendationList";
import { films } from "@/data/recommendations";

export default function FilmsPage() {
  return (
    <PageShell backHref="/recommendations" backLabel="back to recommended content">
      <header className="mb-8">
        <h1 className="text-lg font-semibold text-black dark:text-white">
          films.
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          films worth watching.
        </p>
      </header>

      <RecommendationList
        items={films.map((f) => ({ ...f, credit: f.director }))}
      />
    </PageShell>
  );
}
