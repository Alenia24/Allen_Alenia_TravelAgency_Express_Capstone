import Trip from "../models/trip/trips-model.js";

const trips = [
  {
    title: "Patagonia Hiking Expedition",
    location: "Patagonia, Chile",
    description:
      "Trek through glaciers, lakes, and mountains in Chilean Patagonia.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800079/petagonia_pijpx0.jpg",
    duration: 10,
    price: 1800,
    type: "Adventure",
    date: new Date("2025-06-01"),
  },
  {
    title: "Queenstown Bungee & Kayak",
    location: "Queenstown, New Zealand",
    description: "Thrilling adventure through rivers, cliffs, and mountains.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746801171/queenstown_bkbanq.jpg",
    duration: 7,
    price: 1600,
    type: "Adventure",
    date: new Date("2025-08-15"),
  },
  {
    title: "Banff National Park Explorer",
    location: "Banff, Canada",
    description: "Hike and camp among Canada's Rockies.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800873/banff_cv9f8d.jpg",
    duration: 6,
    price: 1300,
    type: "Adventure",
    date: new Date("2025-06-20"),
  },
  {
    title: "Annapurna Base Camp Trek",
    location: "Nepal",
    description: "A high-altitude adventure in the Himalayas.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800872/nepal_webyqm.jpg",
    duration: 12,
    price: 1400,
    type: "Adventure",
    date: new Date("2025-10-01"),
  },
  {
    title: "Iceland Volcano Expedition",
    location: "Reykjavik, Iceland",
    description: "Explore lava fields, glaciers, and geysers.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800870/icelandreykjavik_vz3etj.jpg",
    duration: 9,
    price: 1700,
    type: "Adventure",
    date: new Date("2025-07-12"),
  },
  {
    title: "Kyoto Temple Tour",
    location: "Kyoto, Japan",
    description:
      "Discover ancient temples, tea ceremonies, and traditional gardens.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800872/kyoto_ud0jtz.jpg",
    duration: 5,
    price: 1200,
    type: "Cultural",
    date: new Date("2025-09-10"),
  },
  {
    title: "Rome Historical Journey",
    location: "Rome, Italy",
    description: "Walk through the Colosseum, Vatican, and ancient ruins.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800870/rome_axqtuk.jpg",
    duration: 6,
    price: 1100,
    type: "Cultural",
    date: new Date("2025-06-05"),
  },
  {
    title: "Istanbul Old Town Experience",
    location: "Istanbul, Turkey",
    description: "Cross Continents in a city of deep culture and history.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800870/instanbul_im2gf3.jpg",
    duration: 7,
    price: 950,
    type: "Cultural",
    date: new Date("2025-07-15"),
  },
  {
    title: "Pyramids & Cairo Museum",
    location: "Cairo, Egypt",
    description: "Marvel at pyramids and explore ancient artifacts.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800869/cairo_glw8hg.jpg",
    duration: 6,
    price: 1000,
    type: "Cultural",
    date: new Date("2025-08-01"),
  },
  {
    title: "Great Wall and Forbidden City",
    location: "Beijing, China",
    description: "Uncover the legacy of emperors and dynasties.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800869/greatwall_yvt2yo.jpg",
    duration: 7,
    price: 1250,
    type: "Cultural",
    date: new Date("2025-10-10"),
  },
  {
    title: "Disney World Magic Package",
    location: "Orlando, USA",
    description: "Bring your family to the happiest place on Earth.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800871/disney_v7wkaq.jpg",
    duration: 7,
    price: 1600,
    type: "Family",
    date: new Date("2025-07-01"),
  },
  {
    title: "Gold Coast Fun & Surf",
    location: "Gold Coast, Australia",
    description: "Beaches, theme parks, and wildlife for the whole family.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800905/goldcoast_nfh61q.jpg",
    duration: 6,
    price: 1400,
    type: "Family",
    date: new Date("2025-11-20"),
  },
  {
    title: "Singapore City Safari",
    location: "Singapore",
    description: "Zoo, gardens, and world-class attractions.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800904/singapore_g9rr3t.jpg",
    duration: 4,
    price: 1300,
    type: "Family",
    date: new Date("2025-08-05"),
  },
  {
    title: "Barcelona Family Fiesta",
    location: "Barcelona, Spain",
    description: "Art, beaches, and tapas with the kids.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800904/barcelona_cxugvp.jpg",
    duration: 4,
    price: 1450,
    type: "Family",
    date: new Date("2025-06-25"),
  },
  {
    title: "Cape Town Wildlife Tour",
    location: "Cape Town, South Africa",
    description: "Explore safaris, oceans, and mountains with family.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800903/capetown_wwn3mr.jpg",
    duration: 8,
    price: 1700,
    type: "Family",
    date: new Date("2025-12-01"),
  },
  {
    title: "Paris Lovers' Escape",
    location: "Paris, France",
    description: "Romance, fine wine, and the Eiffel Tower.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800903/paris_zlptzz.jpg",
    duration: 5,
    price: 1800,
    type: "Romantic",
    date: new Date("2025-09-12"),
  },
  {
    title: "Santorini Sunset Getaway",
    location: "Santorini, Greece",
    description: "White-washed houses and ocean views.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800901/santorini_kqtols.jpg",
    duration: 4,
    price: 1450,
    type: "Romantic",
    date: new Date("2025-06-18"),
  },
  {
    title: "Venice Gondola Weekend",
    location: "Venice, Italy",
    description: "Canals, music, and Italian romance.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800901/venice_heogcu.jpg",
    duration: 4,
    price: 1300,
    type: "Romantic",
    date: new Date("2025-07-25"),
  },
  {
    title: "Bora Bora Honeymoon Package",
    location: "Bora Bora, French Polynesia",
    description: "Overwater bungalows and crystal blue water.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800900/bora_zzt6os.jpg",
    duration: 7,
    price: 2500,
    type: "Romantic",
    date: new Date("2025-10-03"),
  },
  {
    title: "Prague Fairytale Retreat",
    location: "Prague, Czechia",
    description: "Castles, bridges, and evening strolls.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800900/prague_t7tnls.jpg",
    duration: 5,
    price: 1200,
    type: "Romantic",
    date: new Date("2025-11-10"),
  },
  {
    title: "Maldives Island Chill",
    location: "Maldives",
    description: "Luxury villas and snorkelling reefs.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800899/maildives_v4zhru.jpg",
    duration: 6,
    price: 2200,
    type: "Beach",
    date: new Date("2025-09-01"),
  },
  {
    title: "Bali Surf & Relax",
    location: "Bali, Indonesia",
    description: "Waves, temples, and sunsets.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800897/bali_aph3yf.jpg",
    duration: 7,
    price: 1500,
    type: "Beach",
    date: new Date("2025-07-08"),
  },
  {
    title: "Phuket Island Hopping",
    location: "Phuket, Thailand",
    description: "Tropical beaches and Thai cuisine.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800897/phuket_fziuw2.jpg",
    duration: 6,
    price: 1400,
    type: "Beach",
    date: new Date("2025-08-20"),
  },
  {
    title: "Cancun Beach Fiesta",
    location: "Cancun, Mexico",
    description: "Fiestas, tacos, and turquoise seas.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800894/cancun_t1yvdk.jpg",
    duration: 5,
    price: 1350,
    type: "Beach",
    date: new Date("2025-06-15"),
  },
  {
    title: "Maui Hawaiin Escape",
    location: "Maui, Hawaii",
    description: "Lush valleys and Pacific beaches.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800893/maui_cfbff0.jpg",
    duration: 7,
    price: 2000,
    type: "Beach",
    date: new Date("2025-10-18"),
  },
  {
    title: "Reykjavik Northern Lights Tour",
    location: "Reykjavik, Iceland",
    description:
      "Experience the magical Aurora Borealis and Icelandic culture.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800893/northenlights_oom8nh.jpg",
    duration: 6,
    price: 1600,
    type: "Other",
    date: new Date("2025-12-01"),
  },
  {
    title: "Havana Cultural Blend",
    location: "Havana, Cuba",
    description: "Live music, vintage cars, and colorful streets.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800896/havana_uvyuun.jpg",
    duration: 5,
    price: 1100,
    type: "Other",
    date: new Date("2025-09-05"),
  },
  {
    title: "Lima Food & History Tour",
    location: "Lima, Peru",
    description: "Explore coastal Peru through cuisine and ancient sites.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800895/lima_kyb6cq.jpg",
    duration: 7,
    price: 1250,
    type: "Other",
    date: new Date("2025-07-22"),
  },
  {
    title: "Tallinn Medieval Discovery",
    location: "Talinn, Estonia",
    description: "Wander through medieval walls and towers in the Baltics.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800892/talinn_cpinf0.jpg",
    duration: 4,
    price: 950,
    type: "Other",
    date: new Date("2025-08-18"),
  },
  {
    title: "Tbilisi Mountains & Wine",
    location: "Tbilisi, Georgia",
    description: "Wine country, thermal baths, and the Cauasus mountains.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800891/tbilisi_iwjygl.jpg",
    duration: 6,
    price: 1150,
    type: "Other",
    date: new Date("2025-10-12"),
  },
  {
    title: "St.Vincent & The Grenadines Sailing Retreat",
    location: "St.Vincent & The Grenadines",
    description:
      "Hop between islands on a sailing adventure through crystal-clear waters.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800892/svg_qp64sq.jpg",
    duration: 7,
    price: 2100,
    type: "Island",
    date: new Date("2025-06-10"),
  },
  {
    title: "St.Lucia Volcano & Beach Escape",
    location: "St.Lucia",
    description:
      "Experience the Caribbean's only drive-in volcano, lush jungles, and calm beaches.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800890/stlucia_pb4l1z.jpg",
    duration: 6,
    price: 1950,
    type: "Island",
    date: new Date("2025-07-20"),
  },
  {
    title: "Jamaica Reggae & Reef Getaway",
    location: "Jamaica",
    description:
      "Enjoy laid-back vibes, reggae rhythms, and reef snorkelling in Montego Bay.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800890/jamaica_nsqct5.jpg",
    duration: 5,
    price: 1700,
    type: "Island",
    date: new Date("2025-08-14"),
  },
  {
    title: "Antigua All-Inclusive Resort Escape",
    location: "Antigua & Barbuda",
    description: "All inclusive luxury meets calm Caribbean bliss.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800889/antigua_wovigt.jpg",
    duration: 7,
    price: 2300,
    type: "Island",
    date: new Date("2025-10-22"),
  },
  {
    title: "Barbados Culture & Coastline tour",
    location: "Barbados",
    description: "Relax on pink-sand beaches and explore rich Bajan heritage.",
    imageURL:
      "https://res.cloudinary.com/dsunno7gb/image/upload/v1746800889/barbados_hluarp.jpg",
    duration: 6,
    price: 1800,
    type: "Island",
    date: new Date("2025-09-01"),
  },
];

async function seedTrips() {
  try {
    // Delete existing trips
    await Trip.deleteMany({});
    // Insert trips defined above
    await Trip.insertMany(trips);

    console.log(`Trips seeded successfully`);
  } catch (error) {
    console.log(`Error Seeding Trips ${error.message}`);
  }
}

export default seedTrips;
