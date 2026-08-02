import PageShell from "@/components/ui/PageShell";
import RecommendationList from "@/components/Recommendations/RecommendationList";
import { books } from "@/data/recommendations";

export default function BooksPage() {
  return (
    <PageShell backHref="/recommendations" backLabel="back to recommended content">
      <header className="mb-8">
        <h1 className="text-sm font-semibold text-black dark:text-white">
          books.
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          books worth reading.
        </p>
      </header>

      <RecommendationList
        items={books.map((b) => ({ ...b, credit: b.author }))}
      />
    </PageShell>
  );
}
