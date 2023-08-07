import express from 'express';
const router = express.Router();
import Utilisateur from '../model/Utilisateur.js'; // Make sure to use the correct file path
import validator from 'validator';
import { transporter, mailOptions } from '../util/EmailInformation.js'; // Make sure to use the correct file path

// localhost:9000/user/login
router.post('/login', async (req, res) => {
    try {
        const user = await Utilisateur.find({mail : req.body.mail, password : String(req.body.password)}).exec()
        if (user.length === 0) {
            return res.status(404).json({ error: 'Login or password incorrect' });
        }
        return res.status(200).json({ success: user });
    } catch (err) {
        console.error('Login error:', err);
        return res.status(500).json({ error: 'Server error' });
    }
});

// localhost:9000/user/:id
router.get('/:id', async (req, res) => {
    try {
        const user = await Utilisateur.find({ _id: req.params.id });
        if (user.length === 0) {
            return res.status(404).json({ error: 'No user found with id: ' + req.params.id });
        }
        return res.status(200).json({ success: user });
    } catch (err) {
        console.error('Get by ID error:', err);
        return res.status(500).json({ error: 'Server error' });
    }
});

// localhost:9000/user/addfavoris
router.post('/addfavoris', async (req, res) => {
    try {
        const user = await Utilisateur.findOneAndUpdate(
            { _id: req.body.iduser },
            { $push: { favoris: req.body.touristspot } },
            { new: true }
        );
        console.log('Adding favorite success: ' + user);
        return res.status(200).json({ success: user });
    } catch (err) {
        console.error('Add favorite error:', err);
        return res.status(500).json({ error: 'Server error' });
    }
});

// localhost:9000/user/logup
router.post('/logup', async (req, res) => {
    const usertoLogup = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        mail: req.body.mail,
        password: req.body.password
    };

    if (!validerChamp(usertoLogup)) {
        return res.status(404).json({ error: 'All fields are required.' });
    }

    if (!validator.isEmail(usertoLogup.mail)) {
        return res.status(404).json({ error: 'Invalid Email' });
    }

    try {
        const existingUser = await Utilisateur.find({ mail: req.body.mail }).exec();
        if (existingUser.length > 0) {
            return res.status(409).json({ error: 'Email already exists' });
        }

        mailOptions.to = usertoLogup.mail;
        transporter.sendMail(mailOptions, async (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.error('Success:', info);
                const usertoSave = new Utilisateur(usertoLogup);
                try {
                    const savedUser = await usertoSave.save();
                    console.log('User saved:', savedUser);
                    return res.status(200).json({ success: savedUser });
                } catch (error) {
                    console.error('Error saving user:', error);
                    return res.status(500).json({ error: 'Server error' });
                }
            }
        });
    } catch (err) {
        console.error('Logup error:', err);
        return res.status(500).json({ error: 'Server error' });
    }
});

function validerChamp(user) {
    const values = Object.values(user);
    for (const value of values) {
        if (value === null || value === undefined || String(value).trim() === '') {
            return false;
        }
    }
    return true;
}

export default router;
