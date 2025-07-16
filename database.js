import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config();
console.log("→ Using CONNECTION:", process.env.CONNECTION);

const client = new MongoClient(process.env.CONNECTION, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 10000,
  maxPoolSize: 10,
  retryWrites: true,
});

// Close db connection gracefully
process.on("SIGINT", async () => {
  console.log("Shutting down gracefully...");
  try {
    await client.close();
    console.log("Database connection closed");
    process.exit(0);
  } catch (error) {
    console.error("Error closing database connection:", error);
    process.exit(1);
  }
});

const connection = client.connect().catch((error) => {
  console.error("Failed to connect to MongoDB:", error);
  process.exit(1);
});

const database = client.db("a6-tv-shows");

export { connection, database };
