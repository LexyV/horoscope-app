const express = require('express');
const Horoscope = require('../models/horoscope');
const Comments = require('../models/comment');

const router = express.Router();


router.get("/comments", (req, res, next) => {
    Horoscope.find({}, (err, horoscopes) => {
        if (err) { next(err); }
        res.render("../views/horoscopes/index.ejs", {
            horoscopes: horoscopes
        });

    })
});

//Route to Handle New Comment
router.get('/horoscopes/:id/horoscopes/new', (req, res, next) => {
    let horoscopeId = req.params.horoscope;

    Horoscope.findById(horoscopeId, (err, horoscope) => {
        if (err) { next(err); }
        res.render('horoscopes/new', { horoscope: horoscope });
    });
});

// Route to Handle Comment Submission
router.post('/horoscopes/:id/comments', (req, res, next) => {
    // Load the Horoscope From the Database
    let horoscopeId = req.params.id;
    console.log("horoscopeId",horoscopeId )

    Horoscope.findById(horoscopeId, (err, theHoroscope) => {
        if(err){
            // console.log("err is:", err)
            next(err);
            return;
        }
        // console.log("heyhoroscope is:", theHoroscope)
        // Create the Schema Object to Save the Comment
        const newComment = new Comments({
            content: req.body.content,
            creator: req.user
        });
        console.log("newComment ========:", newComment);
        // console.log("my horoscope", horoscope)
        // Add Comment to Horoscope Comments Array
        theHoroscope.comments.push(newComment);
    
        // Save the horoscope to the Database
        theHoroscope.save((err) => {
            if (err) { 
                console.log("new err: ", err)
                return next(err); 
            }
            // Redirect the user to the index page
            res.redirect('/');

        });

    });
});

module.exports = router;