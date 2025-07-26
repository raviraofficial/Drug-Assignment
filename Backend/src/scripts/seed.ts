import mongoose from "mongoose";
import dotenv from "dotenv";
import Drug from "../models/Drug";
import seedDrugs from "../../data/drugData.json"; 

dotenv.config();

// Function to seed the database with initial drug data
// Connects to MongoDB, clears existing drugs, and inserts new seed data
// If successful, it logs a success message and exits the process
// If an error occurs, it logs the error and exits with a failure status
const seedDatabase = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/drugs"
    );
    console.log("Connected to MongoDB");

    await Drug.deleteMany({});
    console.log("Existing drugs removed");

    await Drug.insertMany(seedDrugs);
    console.log("Drugs seeded successfully");

    process.exit();
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
};

seedDatabase();
