const {userMutations, userQueries} = require('./userQueries');
const {projectMutations, projectQueries} = require('./projectQueries');
const resolvers = {
    Query: {
      ...userQueries,
      ...projectQueries
    },
    Mutation: {
      ...userMutations,
      ...projectMutations
    }
};

module.exports =  {resolvers};