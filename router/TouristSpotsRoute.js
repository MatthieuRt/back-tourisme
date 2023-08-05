import express from 'express';
import fs from 'fs';
import path from 'path';
import TouristSpots from '../model/TouristSpots.js'; // Make sure to use the correct file path

const router = express.Router();

const videosDirectory = path.join("videos", 'videos');
const imagesDirectory = path.join("videos", 'images');

// Route to serve individual images
router.get('/img/:imgname', (req, res) => {
  const imgName = req.params.imgname;
  const imgPath = path.join(__dirname, 'images', imgName);
  const typeMime = imgPath.substring(imgPath.indexOf('.') + 1, imgPath.length);

  fs.access(imgPath, fs.constants.R_OK, (err) => {
    if (err) {
      console.error('Error accessing image file:', err);
      return res.status(404).send('Image not found');
    }

    res.set('Content-Type', 'image/' + typeMime);
    res.sendFile(imgPath);
  });
});

// Route to serve individual videos
router.get('/video/:videoName', (req, res) => {
  const videoName = req.params.videoName;
  const videoPath = path.join(__dirname, 'videos', videoName);
  const typeMime = videoPath.substring(videoPath.indexOf('.') + 1, videoPath.length);

  fs.access(videoPath, fs.constants.R_OK, (err) => {
    if (err) {
      console.error('Error accessing video file:', err);
      return res.status(404).send('Video not found');
    }

    res.set('Content-Type', 'video/' + typeMime);
    res.sendFile(videoPath);
  });
});

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
