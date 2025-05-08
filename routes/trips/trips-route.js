import express from "express";
const router = express.Router();

// Import the controller
import * as TripsController from "../../controllers/trips/trips-controller.js"

// Get all trips
router.get("/", TripsController.getTrips)

// Create a trip
router.post("/", TripsController.createTrip)

export default router