import express from "express";
require("dotenv").config();
import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import mongoose from "mongoose";
import cors from "cors";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

async function startServer() {
  const app = express();
  app.use(cors());
  const PORT = process.env.PORT || 8001;

  const apolloServer = new ApolloServer({
    schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  });

  mongoose
    .connect(
      "mongodb+srv://admin:admin@cluster0.uxoos.mongodb.net/TheBooktown?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    )
    .then((res) => {
      console.log("DB connection successful");
    })
    .catch((error) => {
      console.log(error);
    });

  await apolloServer.listen(PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}
startServer();
