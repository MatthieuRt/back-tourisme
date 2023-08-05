import express from 'express';
import https from 'https';
import fs from 'fs';
import cors from 'cors';
import bodyParser from 'body-parser';
import './util/DBConnexion.js'; // Make sure to use the correct file path

const app = express();
const certFilePath = './certificat/certificate.pem';
const keyFilePath = './certificat/privatekey.pem';
const passphrase = 'to1rism2ex0mf1nAL';

// Options serveur HTTPS
const options = {
    cert: fs.readFileSync(certFilePath),
    key: fs.readFileSync(keyFilePath),
    passphrase: passphrase
};

//const server = https.createServer(options, app);

/*app.use(cors());
app.use(bodyParser.json());

import TouristSpotRoute from './router/TouristSpotsRoute.js';
app.use('/touristspots', TouristSpotRoute);

import CategorieRoute from './router/CategorieRoute.js';
app.use('/categorie', CategorieRoute);

import UserRoute from './router/UtilisateurRoute.js';
// const InsertionData = require('./util/insertionData');
// InsertionData();
app.use('/user', UserRoute);*/

app.listen(5000,()=>{
    console.log("APP IS RUNNING")
});
