import express from "express";
const router = express.Router();

// Import trip model
import Trip from "../../models/trip/trips-model";

router.get("/", (req, res) => {
    res.send("Trip routes")
})

export default router