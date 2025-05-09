import express from "express";
const router = express.Router();

import * as ReviewsController from "../../controllers/reviews/reviews-controller.js";

//Get all reviews
router.get("/", ReviewsController.getReviews);

// Get all reviews by trip
router.get("/:tripId", ReviewsController.getTripReviews);

// Create a review by tripId
router.post("/tripId", ReviewsController.createReview);

export default router;
