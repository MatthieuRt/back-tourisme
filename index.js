import express from 'express';
import './util/DBConnexion.js';
import CategorieRoute from './router/CategorieRoute.js';
import TouristSpotsRoute from "./router/TouristSpotsRoute.js";
import UtilisateurRoute from "./router/UtilisateurRoute.js";
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("GG NDAO ATORY SY HOEFUZFNZUDFZUDH");
});

app.use('/categorie', CategorieRoute);
app.use('/touristspots', TouristSpotsRoute);
app.use('/user', UtilisateurRoute)

app.listen(5000, () => {
    console.log('app running');
});
