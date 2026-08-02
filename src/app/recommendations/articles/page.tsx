import PageShell from "@/components/ui/PageShell";
import RecommendationList from "@/components/Recommendations/RecommendationList";
import { articles } from "@/data/recommendations";

export default function ArticlesPage() {
  return (
    <PageShell backHref="/recommendations" backLabel="back to recommended content">
      <header className="mb-8">
        <h1 className="text-lg font-semibold text-black dark:text-white">
          articles.
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          articles worth reading.
        </p>
      </header>

      <RecommendationList
        items={articles.map((a) => ({ ...a, credit: a.author }))}
      />
    </PageShell>
  );
}
