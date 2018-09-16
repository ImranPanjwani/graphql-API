import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import models from './models';
import resolvers from './resolvers';
import schema from './schema';

const app = express();

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        models,
        me : models.users[0]
    }
});

server.applyMiddleware({ app, path: '/graphql'});

app.listen({ port : 8000 }, () => {
    console.log('Apollo server at: http://localhost:8000/graphql');
});
