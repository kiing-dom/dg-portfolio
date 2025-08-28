import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

// Initialize Upstash Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (slug) {
    const views = await redis.get<number>(`views:${slug}`);
    return NextResponse.json({ views: views || 0 });
  }

  // Optionally, return all views (not efficient for large sets)
  // const keys = await redis.keys('views:*');
  // const allViews = {};
  // for (const key of keys) {
  //   allViews[key.replace('views:', '')] = await redis.get<number>(key);
  // }
  // return NextResponse.json(allViews);

  return NextResponse.json({});
}

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }
    const views = await redis.incr(`views:${slug}`);
    return NextResponse.json({ views });
  } catch (error) {
    console.error('Error updating views:', error);
    return NextResponse.json({ error: 'Failed to update views' }, { status: 500 });
  }
}
