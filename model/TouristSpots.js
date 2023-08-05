import mongoose from 'mongoose';

const TouristSpotsSchema = new mongoose.Schema({
	name: String,
	location: String,
	idCategorie: String,
	description: String,
	url: String,
	isPopulaire: {
		type: Boolean,
		default: false // Default value should be specified using 'default' instead of 'value'
	},
	video: {
		type: String,
		default: 'touristspots/video/default.mp4'
	},
	image: [
		{
			url: String
		}
	],
	distance: Number,
	guide: Boolean,
	score: Number
}, { collection: 'TouristSpots' });

const TouristSpots = mongoose.model('TouristSpots', TouristSpotsSchema);

export default TouristSpots;
