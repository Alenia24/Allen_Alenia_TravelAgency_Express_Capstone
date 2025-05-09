import mongoose from "mongoose";

import Review from "../../models/reviews/reviews-model.js";

// Get all reviews
async function getReviews(req, res) {
  try {
    const reviews = await Review.find({});

    if (!reviews || reviews.length === 0) {
      return res.status(200).json({ message: "No Reviews Available." });
    }

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get all reviews for a trip
async function getTripReviews(req, res) {
  try {
    const reviews = await Review.find({ trip: req.params.tripId });

    if (!reviews || reviews.length === 0) {
      return res.status(200).json({ message: "Trip has No Reviews." });
    }

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Create a review for a trip by id
async function createReview(req, res) {
    const tripId = req.params.tripId

  try {
    const review = await Review.create({
      ...req.body,
      trip: tripId
    });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { getReviews, getTripReviews, createReview };
