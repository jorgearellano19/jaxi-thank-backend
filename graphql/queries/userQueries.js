const User = require('../../models/user').User;

 function getUsers(parent, args) {
    return User.find({});
}

function createUser(parent, args) {
    let user = new User({
        name: args.name,
        timeInCompany: args.timeInCompany,
        currentJob: args.currentJob
    });
    return User.create(user);
}

module.exports = {
    userQueries: {
        getUsers
    },
    userMutations: {
        createUser
    }
};