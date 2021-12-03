import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

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
});

const startGateway = async () => {
  const server = new ApolloServer({
    gateway,
  });

  server
    .listen(PORT)
    .then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    })
    .catch((error) => console.log("", error));
};

startGateway();
