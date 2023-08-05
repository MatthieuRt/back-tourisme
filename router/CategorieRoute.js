import express from 'express';
const router = express.Router();
import Categorie from '../model/Categorie.js'; // Make sure to use the correct file path

// localhost:9000/categorie/list
// récupérer la liste des lieux touristiques et ses détails
router.get('/list', async (req, res) => {
    try {
        const cat = await Categorie.find({}).exec();
        return res.json(cat);
    } catch (err) {
        console.error('Erreur lors de la récupération des catégories :', err);
        return res.status(500).json({ error: 'Erreur serveur' });
    }
});

export default router;
