import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error('❌ MONGODB_URI environment variable is not defined');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // Allow reuse of global object for hot reload in development
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  // In dev mode, use a global variable so it's not recreated
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, no global caching
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function connectToDB(): Promise<Db> {
  const client = await clientPromise;
  return client.db(); // optionally pass db name: client.db('myDB')
}