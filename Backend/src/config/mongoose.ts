import mongoose from "mongoose";

/**
 * Connects to the MongoDB database using Mongoose.
 * It reads the connection URI from environment variables or defaults to a local MongoDB instance.
 * If the connection is successful, it logs a success message.
 * If an error occurs, it logs the error and exits the process.
 */
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/drugs"
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;