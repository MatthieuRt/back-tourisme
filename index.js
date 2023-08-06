import express from 'express';
import './util/DBConnexion.js';
import CategorieRoute from './router/CategorieRoute.js';
import TouristSpotsRoute from "./router/TouristSpotsRoute.js";
import UtilisateurRoute from "./router/UtilisateurRoute.js";
import HotelRoute from "./router/HotelRoute.js";
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log("Projet tourisme, Août 2023, Master Promotion 10")
});

app.use('/categorie', CategorieRoute);
app.use('/touristspots', TouristSpotsRoute);
app.use('/user', UtilisateurRoute)
app.use('/hotel', HotelRoute);

app.listen(5000, () => {
    console.log('app running');
});
