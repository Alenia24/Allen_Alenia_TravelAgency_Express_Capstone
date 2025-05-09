import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema)

export default Booking
