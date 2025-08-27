import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const viewsFilePath = path.join(process.cwd(), 'data', 'views.json');

// Ensure data directory exists
const dataDir = path.dirname(viewsFilePath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

interface ViewData {
  [slug: string]: number;
}

function getViews(): ViewData {
  try {
    if (fs.existsSync(viewsFilePath)) {
      const data = fs.readFileSync(viewsFilePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading views file:', error);
  }
  return {};
}

function saveViews(views: ViewData): void {
  try {
    fs.writeFileSync(viewsFilePath, JSON.stringify(views, null, 2));
  } catch (error) {
    console.error('Error saving views file:', error);
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  const views = getViews();

  if (slug) {
    return NextResponse.json({ views: views[slug] || 0 });
  }

  return NextResponse.json(views);
}

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();
    
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    const views = getViews();
    views[slug] = (views[slug] || 0) + 1;
    saveViews(views);

    return NextResponse.json({ views: views[slug] });
  } catch (error) {
    console.error('Error updating views:', error);
    return NextResponse.json({ error: 'Failed to update views' }, { status: 500 });
  }
}
