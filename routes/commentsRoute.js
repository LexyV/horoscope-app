const express = require('express');
const Horoscope = require('../models/horoscope');
const Comments = require('../models/comment');

const router = express.Router();

// give me all the horoscopes
router.get('/comments', (req, res, next) => {
    Horoscope.find({}, (err, horoscopes) => {
        if(err){
            next(err);
            return;
        }
        res.render('horoscopes/index',{
            horoscopes: horoscopes,
        })
    })
   
})

// Route to Handle Comment Submission
router.post('/horoscopes/:id/comments', (req, res, next) => {
    // Load the Horoscope From the Database
    let horoscopeId = req.params.id;
    const updates = {
        comments: {
            content: req.body.content,
            // creator: req.user
        }
    }
    Horoscope.findByIdAndUpdate(horoscopeId, updates, (err, theHoroscope) => {
        if(err){
            next(err);
            return;
        }
        // console.log("heyhoroscope is:", theHoroscope)
        // Create the Schema Object to Save the Comment
        // const newComment = new Comments({
        //     content: req.body.content,
        //     creator: req.user
        // });
        // console.log("my horoscope", horoscope)
        // Add Comment to Horoscope Comments Array
        // theHoroscope.comments.push(newComment);
    
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

// delete comments
router.post('/horoscopes/:id/deletecomment',(req, res, next)=>{
    console.log("hitting here")
    let horoscopeId = req.params.id;
    Horoscope.findByIdAndUpdate(horoscopeId, {"$unset": {comments:""}}, (err)=>{
        if(err){
            console.log("ERR: ", err);
            next(err);
            return;
        }
        res.redirect('/');             

    })
});


module.exports = router;