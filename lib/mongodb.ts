import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Check the .env file, MONGODB_URI is not defined");
}

/** * Глобальна змінна потрібна, щоб зберігати з'єднання
 * між перезавантаженнями сервера під час розробки.
 */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { connection: null, promise: null };
}

async function connectToDatabase() {
  // Якщо з'єднання вже є, використовуємо його
  if (cached.connection) {
    return cached.connection;
  }

  // Якщо з'єднання ще немає, створюємо його
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      console.log("✅ Connected to MongoDB");
      return mongoose;
    });
  }

  try {
    cached.connection = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
    process.exit(1);
  }

  return cached.connection;
}

export default connectToDatabase;
