import mongoose from "mongoose";
const MONGO_CONNECTION_STRING =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_URI_PROD
    : process.env.MONGO_URI_DEV;

// Keep track of the connection state
let isConnected;

export const connectToMongoDb = async () => {
  // If already connected, return
  if (isConnected) {
    return;
  }

  try {
    // Connect to MongoDB
    const db = await mongoose.connect(MONGO_CONNECTION_STRING);
    // Check whether we have already connected: (1 means connected)
    isConnected = db.connection.readyState === 1;
    console.log("✅MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Could not connect to MongoDB");
  }
};
