import express from 'express';
import './util/DBConnexion.js';
import CategorieRoute from './router/CategorieRoute.js';

const app = express();

app.get('/', (req, res) => {
    res.send("GG NDAO ATORY SY HOEFUZFNZUDFZUDH");
});

app.use('/categorie', CategorieRoute);

app.listen(5000, () => {
    console.log('app running');
});
