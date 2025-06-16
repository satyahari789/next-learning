import { NextResponse } from 'next/server';
import clientPromise from '../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const movies = await db.collection('movies')
      .find()
      .limit(10)
      .toArray();

    return NextResponse.json(movies);
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to fetch movies' }, { status: 500 });
  }
}
