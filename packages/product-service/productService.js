import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server-express';
import fs from 'fs';
import path from 'path';
import resolveQuery from './src/controller';
import GraphQLJSON from 'graphql-type-json';
import { buildContext } from './src/utility/utilityFunctions';
import firebaseAdmin from './src/config/firebaseAdmin';
import { buildSubgraphSchema } from '@apollo/federation';
require('dotenv').config();
import apiMetrics from 'prometheus-api-metrics';

const PORT = process.env.PORT;
const app = express();

app.use(apiMetrics());

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

//function that imports .graphql files
const importGraphQLAndGetSchema = (file) => {
    const schema = fs.readFileSync(path.join(__dirname, file), 'utf-8');
    return gql`
        ${schema}
    `;
};

const resolvers = { ...resolveQuery(), JSON: GraphQLJSON };

async function createServer() {
    const server = new ApolloServer({
        schema: buildSubgraphSchema([
            {
                typeDefs: importGraphQLAndGetSchema('./src/.graphql'),
                resolvers,
            },
        ]),
        context: buildContext,
    });
    await server.start();
    server.applyMiddleware({ app });
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

createServer();
