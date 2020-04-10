var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: String,
        required: true,
        validate: [hasTechs, 'one technology required']
    },
    phase: {
        type: String,
        required: true
    }
});

function hasTechs(v) {
    return v.length > 0;
};

const Project = mongoose.model('project', projectSchema);

module.exports = {Project};