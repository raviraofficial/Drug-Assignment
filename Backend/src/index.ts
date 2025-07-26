import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongoose";
import drugRoutes from "./routes/drug.routes";
import cors from"cors"
dotenv.config();

export const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/", drugRoutes);

// Connect to MongoDB
// This function establishes a connection to the MongoDB database using Mongoose
connectDB();


// Start the server
// The server listens on the specified port and logs a message when it's running
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

