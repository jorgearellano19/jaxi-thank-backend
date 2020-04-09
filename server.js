const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const types = require('./graphql/types/types').typeDefs;

mongoose.connect('mongodb://mongo/myappdb',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });

app.set('port', (process.env.PORT || 4000));

const server = new ApolloServer({
    typeDefs: types
});

app.use(bodyParser.json());
app.use('*', cors());
server.applyMiddleware({ app });

app.listen(app.get('port'),  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
