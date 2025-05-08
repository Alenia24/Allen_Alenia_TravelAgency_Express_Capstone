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
        const { title, description, price, location, duration, type } = req.body
        const imagelink = req.file?.path;

        const trip = await Trip.create({
            title,
            description,
            price,
            location,
            duration,
            type,
            imageURL: imagelink
        })

        res.status(200).send(trip)
    } catch (error) {
        
    }
}

export { getTrips, createTrip }