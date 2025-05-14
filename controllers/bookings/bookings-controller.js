import Booking from "../../models/bookings/bookings-model.js";

// Create a booking
async function createBooking(req, res) {
  const tripId = req.params.tripId
  try {
    const booking = await Booking.create({
      ...req.body,
      trip: tripId,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export { createBooking}