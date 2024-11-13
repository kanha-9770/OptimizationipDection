// /app/api/submit/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('yourDatabaseName'); // Replace with your actual database name
    const collection = db.collection('formSubmissions'); // Replace with your collection name
    const data = await request.json();

    // Insert the submitted data into MongoDB
    const result = await collection.insertOne(data);

    return NextResponse.json({ message: 'Form submitted successfully', id: result.insertedId }, { status: 200 });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ message: 'Error submitting form' }, { status: 500 });
  }
}
