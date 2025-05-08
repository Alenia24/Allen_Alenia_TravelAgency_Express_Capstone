import Trip from "../../models/trip/trips-model.js"

// Get all trips
async function getTrips(req, res) {
    try {
       const trips = await Trip.find({}) 
       res.status(200).json(trips)
    } catch (error) {
        res.status(400).json("")
    }
}

export { getTrips }