const express = require('express');
const Horoscope = require('../models/horoscope');

const Comments = require('../models/comment');

const router = express.Router();

//Route to Handle New Comment Form
router.get('/horoscopes/:id/comments/new', (req, res, next) => {
    let horoscopeId = req.params.horoscope;

    Horoscope.findById(horoscopeId, (err, horoscope) => {
        if (err) { next(err); }
        res.render('comments/new', { horoscope: horoscope });
    });
});

// Route to Handle Comment Form Submission
router.post('/horoscopes/:id/comments', (req, res, next) => {
    // Load the Horoscope From the Database
    let horoscopeId = req.params.id;

    Horoscope.findById(horoscopeId, (err, horoscope) => {
        // Create the Schema Object to Save the Comment
        const newComment = new Comment({
            content: req.body.content
        });
        
        // Add Comment to Horoscope Comments Array
        horoscope.comments.push(newComment);
    
        // Save the horoscope to the Database
        horoscope.save((err) => {
            if (err) { return next(err); }
            // Redirect the user to the index page
            res.redirect('index');
        });
    });
});

module.exports = router;