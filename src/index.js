import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import resolvers from './resolvers';
import schema from './schema';
import models, { sequelize } from './models';

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    // models
    // me : models.users[0]
  }
});

server.applyMiddleware({ app, path: '/graphql' });

sequelize.sync().then(async () => {
  app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
  });
});
