const mongoose = require('mongoose');

const airlineSchema = new mongoose.Schema({
    airlineId: Number,
    name: String,
    alias: String,
    IATA: String,
    ICAO: String,
    callsign: String,
    country: String,
    active: String
});

module.exports = mongoose.model('Airline', airlineSchema);