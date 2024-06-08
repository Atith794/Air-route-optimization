const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    airline: String,
    airlineId: Number,
    sourceAirport: String,
    sourceAirportId: Number,
    destinationAirport: String,
    destinationAirportId: Number,
    codeshare: String,
    stops: Number,
    equipment: String
});

module.exports = mongoose.model('Route', routeSchema);
