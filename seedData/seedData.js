import Trip from "../models/trip/trips-model.js";
import Booking from "../models/bookings/bookings-model.js";
import Review from "../models/reviews/reviews-model.js";
import seedTrips from "./tripSeed.js";
import seedBookings from "./bookingSeed.js";
import seedReviews from "./reviewSeed.js";

async function seedDataBase() {
  try {
    await Trip.deleteMany({});
    await Booking.deleteMany({});
    await Review.deleteMany({});

    await seedTrips();
    await seedBookings()
    await seedReviews()


  } catch (error) {
    console.log(`Error Seeding Database.`, error);
  }
}

export default seedDataBase;
