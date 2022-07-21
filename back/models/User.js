const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName : { type: String, required: true },
    userSurname : { type : String, required: true },
    email : { type: String, required : true},
    password : { type: String, required: true},
    profilePhoto : { type: String, required: false},
    coverPhoto: { type: String, required: false},
    phoneNumer: { type: Number, required: false},
})

module.exports = mongoose.model('user', userSchema);