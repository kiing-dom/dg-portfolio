import PageShell from "@/components/ui/PageShell";
import RecommendationVideos from "@/components/Recommendations/RecommendationVideos";
import { videos } from "@/data/recommendations";

export default function VideosPage() {
  return (
    <PageShell backHref="/recommendations" backLabel="back to recommended content">
      <header className="mb-8">
        <h1 className="text-lg font-semibold text-black dark:text-white">
          videos.
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          youtube videos worth watching.
        </p>
      </header>

      <RecommendationVideos items={videos} />
    </PageShell>
  );
}
