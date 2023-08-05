import express from 'express';
const router = express.Router();
import Hotel from '../model/Hotel.js'; // Make sure to use the correct file path

// localhost:9000/hotel/list
// récupérer la liste des hôtels
router.get('/list', async (req, res) => {
    try {
        const ho = await Hotel.find({}).exec();
        return res.json(ho);
    } catch (err) {
        console.error('Erreur lors de la récupération des hôtels :', err);
        return res.status(500).json({ error: 'Erreur serveur' });
    }
});

export default router;
