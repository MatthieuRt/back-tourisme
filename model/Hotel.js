import mongoose from 'mongoose';

const HotelSchema = mongoose.Schema({
	titre:String,
    location:String,
	description :String,
	wifi: Boolean,
	prix : Number
}, { collection: 'Hotel' })

const Hotel = mongoose.model('Hotel', HotelSchema);

export default Hotel;