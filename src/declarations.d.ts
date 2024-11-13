declare module '@lottiefiles/react-lottie-player';
// src/global.d.ts
import { MongoClient } from 'mongodb';

declare global {
  namespace NodeJS {
    interface Global {
      _mongoClientPromise?: Promise<MongoClient>;
    }
  }
}
