import mongoose from "mongoose";
import { config } from "dotenv";
config();

import seedDataBase from "../seedData/seedData.js";

// Connect to mongoDB using mongoose
mongoose.connect(process.env.MONGO_URI);

// Verify the connection is established and the database name
mongoose.connection.once("open", async () => {
  console.log(`MongoDB connected: ${mongoose.connection.name}`);
  try {
    await seedDataBase()
  } catch (error) {
    console.log(error);
  }
});
