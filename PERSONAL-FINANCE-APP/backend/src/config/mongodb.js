import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "./env.js";

// Check if DB_URI is defined
if (!DB_URI) {
    throw new Error("DB_URI is not defined");
}

// Connect to MongoDB or exit if connection fails
const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Connected to MongoDB in", NODE_ENV);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

// Export the connectToDatabase function
export default connectToDatabase;