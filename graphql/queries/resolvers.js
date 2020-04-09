const {userMutations, userQueries} = require('./userQueries');

const resolvers = {
    Query: {
      ...userQueries
    },
    Mutation: {
      ...userMutations
    }
};

module.exports =  {resolvers};