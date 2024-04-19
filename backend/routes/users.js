var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const User = require('../models/users');

const OWM_API_KEY = 'ce7418650c86eae6629dfcfdda141c14';


router.post('/signup', (req, res) => {

    if (!req.body.email || !req.body.password) {
        res.json({ result: false, error: 'Missing or empty fields' })
    } else {

        User.find({ email: { $regex: new RegExp(req.body.email, 'i') } }).then(data => {

            if (data.length) {
                res.json({ result: false, error: 'User already exists' })
            } else {

                res.json({ result: true })

                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
                newUser.save()

            }

        })

    }

})


router.post('/signin', (req, res) => {

    if (!req.body.email || !req.body.password) {
        res.json({ result: false, error: 'Missing or empty fields' })
    } else {

        User.find({ email: { $regex: new RegExp(req.body.email, 'i') } }).then(data => {
            console.log(req.body.email)
            console.log(data)
            if (!data.length) {
                res.json({ result: false, error: 'User not found' })
            } else {
                res.json({ result: true })
            }

        })

    }

})



module.exports = router;