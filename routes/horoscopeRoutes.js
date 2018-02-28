const express     = require('express');
const Horoscope = require('../models/horoscope');
const router       = express.Router();
const request = require('request');
var sunsigns;

router.get('/sunsigns', (req, res, next) => {

    request({
        uri: 'http://localhost:3000/api/sunsigns'
    },
    (err, res, body) => {
        sunsigns = JSON.parse(body);
    });

    res.render('/Users/lexy/Desktop/Ironhack/app1/horoscopes/views/horoscopes/sunsigns.ejs', {sunsigns});
    // console.log(sunsigns);
});

router.get('/', (req, res, next) => {
   
})

// router.get('/', (req, res, next) => {
//     Horoscope.find({}, (err, horoscope) => {
//         if (err) {return next(err) }
//         res.render('/horoscopes/index', {
//         horoscope: horoscope
//         });
//     });
// });

router.get('/:id', (req, res, next) => {
    const horoscopeId = req.params.id;
    Horoscope.findById(horoscopeId, (err, horoscope) => {
        if (err) { return next(err); }
        res.render('horoscopes/show', { horoscope: horoscope });
    });
});
router.get('/:id/edit', (req, res, next) => {
    const horoscopeId = req.params.id;

    Horoscope.findById(horoscopeId, (err, horoscope) => {
        if (err) { return next(err); }
        res.render('horoscopes/edit', { horoscope: horoscope });
    });
});

// Update Horoscope Information in Database
router.post('/:id', (req, res, next) => {
    const horoscopeId = req.params.id;

    const updates = {
        sunSign: req.body.sunSign,
        horoscope: req.body.horoscope,
        date: req.body.date,
        comments: req.body.comments
    }

    Horoscope.findByIdAndUpdate(horoscopeId, updates, (err, horoscope) => {
        if (err) { return next(err); }
        return res.redirect('/');
    });
});

module.exports  = router;

// router.get('/', (req, res, next) => {
//     request({
//         uri: 'http://localhost:3000/api/horoscopes'
//     },
//     (err, res, body) => {
//         horoscopes = JSON.parse(body);
//     });

//     res.render('/Users/lexy/Desktop/Ironhack/app1/horoscopes/views/index.ejs', {horoscopes});
//     // console.log(horoscopes);
// });