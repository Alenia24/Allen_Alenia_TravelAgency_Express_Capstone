import mongoose from "mongoose";
import validator from "validator"
// Define Trip Schema
const tripSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    location: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    date: {
      type: Date,
      required: true,
      validate: [date => date > new Date(), "Date Must be in the Future."]
    },
    duration: {
      type: Number,
      required: true,
      min: 1,
    },
    type: {
      type: String,
      required: true,
      enum: [
        "adventure",
        "cultural",
        "family",
        "romantic",
        "beach",
        "island",
        "other",
      ],
      default: "other",
      lowercase: true,
    },
    imageURL: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Trip = mongoose.model("Trip", tripSchema);

export default Trip;
