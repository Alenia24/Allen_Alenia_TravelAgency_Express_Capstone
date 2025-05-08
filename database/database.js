import mongoose from "mongoose";
import { config } from "dotenv";
config();

// Connect to mongoDB using mongoose
mongoose.connect(process.env.MONGO_URL);

// Verify the connection is established and the database name
mongoose.connection.once("open", () => {
    console.log(`MongoDB connected: ${mongoose.connection.name}`);
})

