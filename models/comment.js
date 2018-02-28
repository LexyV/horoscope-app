const mongoose       = require('mongoose');
const Horoscope      = require('./horoscope');
const User           = require('./user');
const Schema         = mongoose.Schema;


const CommentSchema = new Schema({
    _creator         : { type: Schema.Types.ObjectId, ref: 'User', required: true },
    _horoscope       : { type: Schema.Types.ObjectId, ref: 'Comment', required: true },
    content          : String,
    stars            : Number
});

const Comment       = mongoose.model('Comment', CommentSchema);

module.exports       = Comment;