import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	nom: String,
	prenom: String,
	mail: String,
	password: String, // Changed the type to String for passwords
	favoris: {
		type: Array,
		default: null
	}
}, { collection: 'Utilisateur' });

const Utilisateur = mongoose.model('Utilisateur', UserSchema);

export default Utilisateur;
