import Trip from "../../models/trip/trips-model.js";

// Get all trips
async function getTrips(req, res) {
  try {
    const trips = await Trip.find({});

    if(!trips || trips.length === 0) {
        return res.status(200).json({ message: "No Trips Available."})
    }

    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Create a trip
async function createTrip(req, res) {
  try {
    const trip = await Trip.create({
      ...req.body,
      imageURL: req.file?.path,
    });

    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update a trip
async function updateTrip(req, res) {
  try {
    const updatedTrip = {
      ...req.body,
      // Only spreads if the image is updated
      ...(req.file?.path && { imageURL: req.file.path }),
    };
    const trip = await Trip.findByIdAndUpdate(
      req.params.id,
      updatedTrip,
      //Return the update form, before there was a delay
      { new: true }
    );

    if (!trip) {
      return res.status(404).json({ message: "Trip Not Found" });
    }

    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a trip by id
async function getTrip(req, res) {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({ message: "Trip Not Found" });
    }

    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete a trip by id
async function deleteTrip(req, res) {
    try {
        const trip = await Trip.findByIdAndDelete(req.params.id)

        if (!trip) {
          return res.status(404).json({ message: "Trip Not Found" });
        }

        res.status(200).json({ message: "Trip Deleted Successfully."})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export { getTrips, createTrip, updateTrip, getTrip, deleteTrip };
