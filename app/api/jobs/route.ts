import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { query, location } = await request.json();
  const apiKey = process.env.APIJOBS_KEY; // This runs on the server, so no NEXT_PUBLIC_ prefix is needed

  if (!apiKey) {
    console.error('API key (APIJOBS_KEY) is not configured on the server.');
    return NextResponse.json({ error: 'API key is not configured.' }, { status: 500 });
  }

  // Combine query and location for a more robust search, as suggested
  const searchQuery = location ? `${query} ${location}` : query;
  const finalQuery = searchQuery.trim().length > 0 ? searchQuery : 'software engineer';

  try {
    const response = await fetch('https://api.apijobs.dev/v1/job/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': apiKey,
      },
      body: JSON.stringify({ q: finalQuery, size: 50 }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`External API Error ${response.status}:`, errorText);
      return NextResponse.json({ error: `External API request failed with status ${response.status}` }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in /api/jobs route:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
