const Project = require('../../models/project').Project;

function getProjects(parent, args) { 
    return Project.find({});
}

function createProject(parent, args) {
    let project = new Project({
        name: args.name,
        description: args.description,
        technologies: args.technologies,
        phase: args.phase
    });

    return Project.create(project);

}

module.exports = {
    projectQueries: {
        getProjects
    },
    projectMutations: {
        createProject
    }
};