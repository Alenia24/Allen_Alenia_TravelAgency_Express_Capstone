import express from "express";
import { config } from "dotenv";
config();

const app = express();

const PORT = process.env.PORT || 5050;
// Import the database connection
import "./database/database.js";

// Import routes
import tripsRouter from "./routes/trips/trips-route.js";
import bookingsRouter from "./routes/bookings/bookings-route.js";

// Enable to use req.body when forms are submitted
app.use(express.urlencoded({ extended: true }));
// Enable to use req.body without a form, eg. from reqbin, postman, etc
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Travel Agency API.");
});

// Enable routes use
app.use("/trips", tripsRouter);
app.use("/bookings", bookingsRouter);

//Error Handling Middleware
app.use((req, res) => {
  res.status(404).send("Resource Not found.");
});

// App.listen
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
