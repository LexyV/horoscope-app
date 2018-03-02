const mongoose       = require('mongoose');
const Horoscope      = require('./horoscope');
const User           = require('./user');
const Schema         = mongoose.Schema;


const CommentSchema = new Schema({
    creator         : { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // horoscope       : { type: Schema.Types.ObjectId, ref: 'Horoscope', required: true },
    content         : String
});

const Comment       = mongoose.model('Comment', CommentSchema);

module.exports      = Comment;