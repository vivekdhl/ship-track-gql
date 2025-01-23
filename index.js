import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./src/types.js";
import { resolvers } from "./src/resolvers.js";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { createServer } from 'http';
import { expressMiddleware } from "@apollo/server/express4";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/use/ws";
import express from 'express';
import bodyParser from "body-parser";

const port = 4300;
const path = '/graphql';

const schema = makeExecutableSchema({ typeDefs, resolvers });

const apolloServer = new ApolloServer({ schema: schema });
await apolloServer.start();

const app = express();
app.use(bodyParser.json());
app.use(path, expressMiddleware(apolloServer));

const httpServer = createServer(app);

const wsServer = new WebSocketServer({
    server: httpServer,
    path: path,
});

useServer({ schema, }, wsServer);

httpServer.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}${path}`);
    console.log(`🚀 Subscriptions ready at ws://localhost:${port}${path}`);
});