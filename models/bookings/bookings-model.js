import mongoose from "mongoose";
import validator from "validator"

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
    required: true, 
    validate: [validator.isEmail, "Invalid Email Address"]
  },
  telephone: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema)

export default Booking
