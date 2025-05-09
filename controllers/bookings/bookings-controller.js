import Booking from "../../models/bookings/bookings-model.js";

// Create a booking
async function createBooking(req, res) {
  try {
    const booking = await Booking.create({
      ...req.body,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { createBooking}