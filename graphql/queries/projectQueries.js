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

function getProject(parent, args) { 
    if(!args.id) return;
    return Project.findById({_id: args.id});
}

module.exports = {
    projectQueries: {
        getProjects,
        getProject
    },
    projectMutations: {
        createProject
    }
};