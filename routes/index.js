var express     = require('express');
var route       = express.Router();
const Horoscope = require("../models/horoscope");

route.get('/', (req, res, next) => {
    Horoscope.find({}, (err, horoscopes) => {
        if(err){
            next(err);
            return;
        }
        res.render('index', {
            horoscopes: horoscopes,
            // user
        })
    })
})

module.exports  = route;
