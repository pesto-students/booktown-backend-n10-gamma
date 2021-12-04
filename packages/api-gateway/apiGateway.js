import { ApolloServer } from "apollo-server";
import { ApolloGateway, RemoteGraphQLDataSource } from "@apollo/gateway";

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }) {
    // Pass the user's id from the context to each subgraph
    // as a header called `user-id`
    request.http.headers.set("authorization", context.token);
  }
}

const PORT = process.env.PORT || 8000;

const product_listing_url =
  process.env.product_listing_url || "http://localhost:8082/graphql";

const gateway = new ApolloGateway({
  serviceList: [
    { name: "product-listing", url: product_listing_url },
    { name: "product-service", url: "http://localhost:8085/graphql" },
    { name: "user-service", url: "http://localhost:8084/graphql" },
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
