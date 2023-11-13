import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
    flight_number: {},
    airline: {},
    departure_city: {},
    departure_airport: {},
    arrival_city: {},
    arrival_airport: {},
    departure_time: {},
    arrival_time: {},
    duration: {},
    price: {}
});

export default mongoose.model('Flight', flightSchema);
