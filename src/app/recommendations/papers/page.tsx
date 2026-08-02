import PageShell from "@/components/ui/PageShell";
import RecommendationList from "@/components/Recommendations/RecommendationList";
import { papers } from "@/data/recommendations";

export default function PapersPage() {
  return (
    <PageShell backHref="/recommendations" backLabel="back to recommended content">
      <header className="mb-8">
        <h1 className="text-lg font-semibold text-black dark:text-white">
          papers.
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          research papers worth reading.
        </p>
      </header>

      <RecommendationList
        items={papers.map((p) => ({ ...p, credit: p.author }))}
      />
    </PageShell>
  );
}
