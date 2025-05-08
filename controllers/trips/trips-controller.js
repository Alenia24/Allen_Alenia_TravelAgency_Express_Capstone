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

// Create a trip
async function createTrip(req, res) {
    try {
        const trip = await Trip.create({
            ...req.body,
            ...req.file?.path
        })

        res.status(200).json(trip)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Update a trip
async function updateTrip(req, res) {
    try {
        const updatedTrip = {
            ...req.body,
            ...(req.file?.path)
        }
        const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, updatedTrip)

        res.status(200).json(trip)
        

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export { getTrips, createTrip, updateTrip }