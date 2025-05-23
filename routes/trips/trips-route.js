import express from "express";
import multer from "multer"
import { storage } from "../../config/cloudinary.mjs";
const router = express.Router();
const upload = multer({ storage })

// Import middleware
import authenticateToken from "../../utils/auth/middleware/authenticate-token.js";
import verifyIsAdmin from "../../utils/auth/middleware/verify-is-admin.js";
// Import the controller
import * as TripsController from "../../controllers/trips/trips-controller.js"

// Get all trips
router.get("/", TripsController.getTrips)

// Get a trip by its id
router.get("/:id", TripsController.getTrip)

// Create a trip
// upload.single allows only one image 
router.post("/", upload.single("image"), authenticateToken, verifyIsAdmin, TripsController.createTrip)

// Update a trip
router.put("/:id", upload.single("image"), authenticateToken, verifyIsAdmin, TripsController.updateTrip)

// Delete a trip
router.delete("/:id", authenticateToken, verifyIsAdmin, TripsController.deleteTrip)

export default router