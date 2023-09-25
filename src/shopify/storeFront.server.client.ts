import { GraphQLClient } from "graphql-request";

const storeFrontPrivateClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_STOREFRONT_URL!,
  {
    headers: {
      ["Shopify-Storefront-Private-Token"]: process.env.PRIVATE_ACESS_TOKEN!,
    },
  }
);

export default storeFrontPrivateClient;
