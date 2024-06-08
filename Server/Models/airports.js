const mongoose = require('mongoose');

const airportSchema = new mongoose.Schema({
    airportId: Number,
    name: String,
    city: String,
    country: String,
    IATA: String,
    ICAO: String,
    latitude: Number,
    longitude: Number,
    altitude: Number,
    timezone: Number,
    DST: String,
    tzDatabaseTimezone: String,
    type: String,
    source: String
});

module.exports = mongoose.model('Airport', airportSchema);