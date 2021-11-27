import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

const PORT = process.env.PORT || 3000;

const product_listing_url =
  process.env.product_listing_url || "http://localhost:8001/graphql";

const gateway = new ApolloGateway({
  serviceList: [
    { name: "product-listing", url: product_listing_url },
    // more services here
  ],
});

const startGateway = async () => {
  // const { schema, executor } = await gateway
  //   .load()
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log("I am " + error));

  const server = new ApolloServer({
    gateway,
  });

  server
    .listen(PORT)
    .then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    })
    .catch((error) => console.log("asdfsf", error));
};

startGateway();
