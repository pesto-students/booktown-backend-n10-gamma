import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import mongoose from 'mongoose';
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },
};

mongoose
    .connect(process.env.DB_CONNECTION_URL || '', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((res) => {
        console.log('DB connection successful');
    })
    .catch((error) => {
        console.log(error);
    });

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/graphql`);
});
