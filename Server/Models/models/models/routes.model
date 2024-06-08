const mongoose = require('mongoose');

/*
    Each entry contains the following information:

    Airline	2-letter (IATA) or 3-letter (ICAO) code of the airline.
    Airline ID	Unique OpenFlights identifier for airline (see Airline).
    Source airport	3-letter (IATA) or 4-letter (ICAO) code of the source airport.
    Source airport ID	Unique OpenFlights identifier for source airport (see Airport)
    Destination airport	3-letter (IATA) or 4-letter (ICAO) code of the destination airport.
    Destination airport ID	Unique OpenFlights identifier for destination airport (see Airport)
    Codeshare	"Y" if this flight is a codeshare (that is, not operated by Airline, but another carrier), empty otherwise.
    Stops	Number of stops on this flight ("0" for direct)
    Equipment	3-letter codes for plane type(s) generally used on this flight, separated by spaces

    Notes:
    Routes are directional: if an airline operates services from A to B and from B to A, both A-B and B-A are listed separately.
    Routes where one carrier operates both its own and codeshare flights are listed only once.

    For more info check https://openflights.org/data
*/

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