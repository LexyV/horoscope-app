const express     = require('express');
const Horoscope = require('../models/horoscope');
const router       = express.Router();
// const request = require('request');
// var sunsigns;

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
        name        : req.body.name,
        description : req.body.description,
        love        : req.body.love,
        success     : req.body.success,
        travel      : req.body.travel,
        party       : req.body.party,
        comments    : req.body.comments
    }

    Horoscope.findByIdAndUpdate(horoscopeId, updates, (err, horoscope) => {
        if (err) { return next(err); }
        return res.redirect('/');
    });
});

// URL: horoscopes/signs/aquarius
router.get('/signs/aquarius', (req, res, next) => {
    res.render('signs/aquarius');
    // res.send("test");
})

module.exports  = router;