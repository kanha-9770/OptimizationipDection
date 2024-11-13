// src/lib/mongodb.ts
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb+srv://akash:akashpassword@cluster0.ruk6x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
if (!uri) throw new Error('Please add your MongoDB URI to .env.local');

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
