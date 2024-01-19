const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {type: String},
    phone: {type: Number},
    email: {type: String, unique: true},
    password: {type: String},
    address: {type: String},
    job: {type: String},
    relativePhone: {type: Number},
    relativeAddress: {type: String},

});

module.exports = mongoose.model('User', User);