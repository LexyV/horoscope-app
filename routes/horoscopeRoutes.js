const express     = require('express');
const Horoscope = require('../models/horoscope');
const Comments = require('../models/comment');
const router       = express.Router();


// show me all the comments for this horoscope
router.get('/:id/allcomments', (req, res, next) => {
    const horoscopeId = req.params.id;
    console.log("horoscopeId ````````", horoscopeId)
    Horoscope.findById(horoscopeId, (err, horoscope) => {
        if (err) { return next(err); }
        res.render('horoscopes/show', { horoscope: horoscope });
    });
});


router.get("/:id/edit", (req, res, next) => {
    const horoscopeId = req.params.id;
    Horoscope.findById(horoscopeId, (err, horoscope) => {
        if (err) { 
            console.log("err1:", err)
            next(err); 
        }
           
        res.render("horoscopes/edit", {
            horoscope: horoscope,
        });
    })
});

//  

// Update Horoscope Information in Database
router.post('/:id/edit', (req, res, next) => {
    const horoscopeId = req.params.id;

    const updates = {
      comments : {
        content: req.body.content,
        creator: req.user
      }
    }

    Horoscope.findByIdAndUpdate(horoscopeId, updates, (err, horoscope) => {
        horoscope.save((err) => {
            if (err) { 
                return next(err); 
            }
            res.redirect('/');
        })
    });
});

module.exports  = router;