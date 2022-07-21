const mongoose = require('mongoose');
const { stringify } = require('querystring');

const postSchema = mongoose.Schema({
    profilePhoto : { type: String, required: true},
    userId : { type: String, required: true},
    userName: { type: String, required: true},
    userSurname: { type: String, required: true},
    date: { type: Date, required: true},
    content: { type: String, required: true},
    imgUrl: { type: String, required: false},
    likes: { type: Number, required: false, default: 0},
    usersLikes: [],
    comments: [],
    updateDate: {type: Date},
})

module.exports = mongoose.model('post', postSchema);