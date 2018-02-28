const mongoose      = require('mongoose');
const Comment      = require('./comment');
const Schema        = mongoose.Schema;

const HoroscopeSchema = new Schema({
    sunSign         : String,
    horoscope       : String,
    // date            : String,
    comments        :[Comment.schema]
});

const Horoscope     = mongoose.model('Horoscope', HoroscopeSchema);
module.exports      = Horoscope;