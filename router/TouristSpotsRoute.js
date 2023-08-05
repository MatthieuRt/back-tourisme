import express from 'express';
import TouristSpots from '../model/TouristSpots.js'; // Make sure to use the correct file path

const router = express.Router();



// Get the list of tourist spots and details
router.get('/list', async (req, res) => {
  try {
    const spots = await TouristSpots.find({}).exec();
    return res.json(spots);
  } catch (err) {
    console.error('Error retrieving tourist spots list:', err);
    return res.status(500).json({ error: err });
  }
});

// Get the list of popular tourist spots and details
router.get('/favoris', async (req, res) => {
  try {
    const spots = await TouristSpots.find({ isPopulaire: true }).exec();
    return res.json(spots);
  } catch (err) {
    console.error('Error retrieving popular tourist spots list:', err);
    return res.status(500).json({ error: err });
  }
});

// Get the list of tourist spots by category
router.get('/categorie/:cat', async (req, res) => {
  try {
    const spots = await TouristSpots.find({ idCategorie: req.params.cat }).exec();
    return res.json(spots);
  } catch (err) {
    console.error('Error retrieving tourist spots by category:', err);
    return res.status(500).json({ error: err });
  }
});

// Get a tourist spot by ID
router.get('/:id', async (req, res) => {
  try {
    const spot = await TouristSpots.findById(req.params.id).exec();
    return res.json(spot);
  } catch (err) {
    console.error('Error retrieving tourist spot by ID:', err);
    return res.status(500).json({ error: err });
  }
});

export default router;
