import { ApolloServer } from "apollo-server";
import { ApolloGateway, RemoteGraphQLDataSource } from "@apollo/gateway";
import apiMetrics from "prometheus-api-metrics";
import express from "express";

const app = express();
app.use(apiMetrics());
class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }) {
    request.http.headers.set("authorization", context.token);
  }
}

const PORT = process.env.PORT || 8000;
const product_service = "http://localhost:8085/graphql";
const user_service = "https://booktown-user-service.herokuapp.com/graphql";
const filter_service = "http://localhost:8082/graphql";

const gateway = new ApolloGateway({
  serviceList: [
    { name: "product-listing", url: filter_service },
    {
      name: "product-service",
      url: product_service,
    },
    { name: "user-service", url: user_service },
    // more services here
  ],
  buildService({ name, url }) {
    return new AuthenticatedDataSource({ url });
  },
});

const startGateway = async () => {
  const server = new ApolloServer({
    gateway,
    context: ({ req }) => {
      return { token: req.headers.authorization };
    },
  });

  server
    .listen(PORT)
    .then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    })
    .catch((error) => console.log("", error));
};

startGateway();
