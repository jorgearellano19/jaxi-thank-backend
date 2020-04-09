const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const typeDefs = require('./graphql/types/types').typeDefs;
const resolvers = require('./graphql/queries/resolvers').resolvers;

mongoose.connect('mongodb://localhost:27017/admin_dashboard',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });

app.set('port', (process.env.PORT || 4000));

const server = new ApolloServer({ typeDefs, resolvers });

app.use(bodyParser.json());
app.use('*', cors());
server.applyMiddleware({ app });

app.listen(app.get('port'),  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
