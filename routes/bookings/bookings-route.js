import express from "express";
const router = express.Router();

import * as BookingsController from "../../controllers/bookings/bookings-controller.js"

// Create a booking
router.post("/", BookingsController.createBooking)

export default router