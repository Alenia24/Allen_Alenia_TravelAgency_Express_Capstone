import express from "express";
const router = express.Router();

import * as ReviewsController from "../../controllers/reviews/reviews-controller.js";

//Get all reviews
router.get("/", ReviewsController.getReviews);

export default router;
