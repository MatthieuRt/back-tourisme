import mongoose from 'mongoose';

const CategorieSchema = new mongoose.Schema({
    titre: String,
    url: String
}, { collection: 'Categorie' });

const Categorie = mongoose.model('Categorie', CategorieSchema);

export default Categorie;
