var express     = require('express');
var signs       = express.Router();

signs.get('/', (req, res, next) => {
    res.render('signs');
})

module.exports  = signs;