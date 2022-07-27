const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    userSurname : { type : String, required: true },
    userName : { type: String, required: true },
    email : { type: String, required : true, unique: true},
    password : { type: String, required: true},
    passwordConfirm : { type: String, required: true},
    isAdmin : { type: Boolean, default: false},
    profilePhoto : { type: String },
    coverPhoto : { type: String },
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema);