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

function updateUser(parent, args) {
    if (!args.id) return;
        return User.findOneAndUpdate(
         {
           _id: args.id
         },
         {
           $set: {
             name: args.name,
             timeInCompany: args.timeInCompany,
             currentJob: args.currentJob,
           }
         }, {new: true});
}

function deleteUser(parent, args) {
    if(!args.id) return;
    return User.findByIdAndRemove({_id: args.id});
}

function getUser(parent, args) { 
    if(!args.id) return;
    return User.findById({_id: args.id});
}

module.exports = {
    userQueries: {
        getUsers,
        getUser
    },
    userMutations: {
        createUser,
        updateUser,
        deleteUser
    }
};