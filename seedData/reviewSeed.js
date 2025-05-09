import Trip from "../models/trip/trips-model.js";
import Review from "../models/reviews/reviews-model.js";

const reviews = [
  {
    name: "Alice Nguyen",
    rating: 5,
    review:
      "The Patagonia trek was a dream come true. Every day brought stunning landscapes and unforgettable hikes.",
  },
  {
    name: "Carlos Mendes",
    rating: 5,
    review:
      "Bungee jumping in Questown and kayaking through pristine rivers was the thrill of a lifetime!",
  },
  {
    name: "Isabell Ross",
    rating: 5,
    review:
      "Banff's natural beauty is unreal. The guides were knowledeable and the campsites were well set up.",
  },
  {
    name: "Akira Yamamoto",
    rating: 4,
    review:
      "Trekking to Annapurna Base Case was tough but rewarding. The Himalayas are beyond majestic.",
  },
  {
    name: "Sarah Thompson",
    rating: 4,
    review:
      "From lava fields to ice caves, Iceland never stopped suprising us. Perfect blend of adventure and awe.",
  },
  {
    name: "Anonymous",
    rating: 5,
    review:
      "Rome is a treasure trove of history. Our guide brought the past to life, and the food was outstanding!",
  },
  {
    name: "Emily Johnson",
    rating: 4,
    review:
      "Standing before the pyramids and exploring the Cairo Museum was a surreal, bucket-list experience.",
  },
  {
    name: "Anonymous",
    rating: 5,
    review:
      "The Great Wall hike and Forbidden City tour gave me chills. Deeply enriching and beautifully guided.",
  },
];

async function seedReviews() {
  try {
    // Delete existing reviews
    await Review.deleteMany({});

    // Get all the trips in order to link them
    const trips = await Trip.find({});

    // Iterate through the defined reviews above
    const reviewsToSeed = reviews.map((review, i) => {
      // Get a trip at trip [i]
      const trip = trips[i % trips.length];
      return {
        // Spread the reviews properties
        ...review,
        // Assign the trip to the trip_.id at trip[i]
        trip: trip._id,
      };
    });

    await Review.insertMany(reviewsToSeed);
    console.log(`Reviews seeded successfully`);
  } catch (error) {
    console.log(`Error Seeding Reviews`);
  }
}

export default seedReviews