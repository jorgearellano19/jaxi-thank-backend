const { gql } = require('apollo-server-express');
const Project = require('../../models/project').Project;
const User = require('../../models/user').User;

const typeDefs = gql `
    type Project {
        id: ID!
        name: String!
        description: String!
        technologies: [String]!
        phase: String
    }

    type User {
        id : ID!
        name: String!
        timeInCompany: Int
        currentJob: String
    }

    type Query {
        getProjects: [Project]
        getUsers: [User]
        getUser(id: ID!): User
        getProject(id: ID!): Project
    }

    type Mutation {
        createProject(name: String!, description: String!, technologies: [String]!, phase: String!) : Project
        updateProject(id: ID!, name: String!, description: String!, technologies: [String]!, phase: String!) : Project
        deleteProject(id: ID!) : Project
        createUser(name: String!, timeInCompany: Int!, currentJob: String!) : User
        updateUser(id: ID!, name: String!, timeInCompany: Int!, currentJob: String!): User
        deleteUser(id: ID!) : User
    }
`;

module.exports = {
    typeDefs
};