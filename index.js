import express from 'express';
import './util/DBConnexion.js';

const app = express();

app.get('/', (req, res) => {
    res.send("GG NDAO ATORY SY HOEFUZFNZUDFZUDH");
});

app.listen(5000, () => {
    console.log('app running');
});
