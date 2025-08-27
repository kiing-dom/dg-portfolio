'use client';

import { useEffect, useState } from 'react';

export function useViewCounter(slug: string) {
  const [views, setViews] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const incrementView = async () => {
      try {
        // Check if we've already counted this view in this session
        const sessionKey = `viewed_${slug}`;
        const hasViewed = sessionStorage.getItem(sessionKey);

        // Get current view count
        const response = await fetch(`/api/views?slug=${slug}`);
        const data = await response.json();
        setViews(data.views || 0);

        // Only increment if not viewed in this session
        if (!hasViewed) {
          const incrementResponse = await fetch('/api/views', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ slug }),
          });

          if (incrementResponse.ok) {
            const incrementData = await incrementResponse.json();
            setViews(incrementData.views);
            sessionStorage.setItem(sessionKey, 'true');
          }
        }
      } catch (error) {
        console.error('Error updating view count:', error);
      } finally {
        setLoading(false);
      }
    };

    incrementView();
  }, [slug]);

  return { views, loading };
}
