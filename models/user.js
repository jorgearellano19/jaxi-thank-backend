var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    timeInCompany: {
        type: Number,
        required: true
    },
    currentJob: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user', userSchema);

module.exports = {User};