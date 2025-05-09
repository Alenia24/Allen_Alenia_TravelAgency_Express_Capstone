import Trip from "../models/trip/trips-model.js"
import Booking from "../models/bookings/bookings-model.js"

const bookings = [
  {
    "firstName": "Jane",
    "lastName": "Jenner",
    "email": "janej@example.com",
    "telephone": "+1-555-123-4567"
  },
  {
    "firstName": "John",
    "lastName": "Smith",
    "email": "johns@example.com",
    "telephone": "+1-555-234-5678"
  },
  {
    "firstName": "Emily",
    "lastName": "Johnson",
    "email": "emilyj@example.com",
    "telephone": "+1-555-345-6789"
  },
  {
    "firstName": "Micheal",
    "lastName": "Browne",
    "email": "michaelb@example.com",
    "telephone": "+1-555-234-3454"
  },
  {
    "firstName": "Oliva",
    "lastName": "Davis",
    "email": "oliviad@example.com",
    "telephone": "+1-555-346-4667"
  },
  {
    "firstName": "Ava",
    "lastName": "Clarke",
    "email": "avac@example.com",
    "telephone": "+1-555-866-9765"
  },
  {
    "firstName": "Noah",
    "lastName": "Lewis",
    "email": "noahl@example.com",
    "telephone": "+1-555-434-3425"
  },
  {
    "firstName": "Isabella",
    "lastName": "Hall",
    "email": "isabellah@example.com",
    "telephone": "+1-555-265-4647"
  },
  {
    "firstName": "James",
    "lastName": "allen",
    "email": "jamesa@example.com",
    "telephone": "+1-555-343-4676"
  }
]

async function seedBookings() {
  try {
    // Delete existing bookings
    await Booking.deleteMany({})
    
    // Get all the trips in order to link to a booking 
  const trips = await Trip.find({})

  // Iterate through the defined booking above 
  const bookingsToSeed = bookings.map((booking, i) => {
    // get a trip at trip [i]
    const trip = trips[i]
    return {
      // Spread the booking properties
      ...booking,
      // Assign the trip to the trip_.id at trip[i]
      trip: trip._id
    }
  })
    
    await Booking.insertMany(bookingsToSeed)
    console.log(`Bookings seeded successfully`);
  } catch (error) {
    console.log(`Error Seeding Bookings: ${error.message}`);
  }
  
}

export default seedBookings;
