const mongoose      = require('mongoose');
const Comment      = require('./comment');
const Schema        = mongoose.Schema;

const HoroscopeSchema = new Schema({
    name       : String,
    description: String,
    love: String,
    success: String,
    travel: String,
    party: String,
    comments: {
        creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        content: String
    }
    // date            : String,
    // comments        :[Comment.schema]
});

const Horoscope     = mongoose.model('Horoscope', HoroscopeSchema);
module.exports      = Horoscope;