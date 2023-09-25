import { CodegenConfig } from "@graphql-codegen/cli";

// Must enter the enviorment veriables by hand; unable to access normally

// -- Enter endpoints defined in .env file
const graphqlEndpoint =
  "https://{store name}.myshopify.com/api/2023-04/graphql.json";
const storeFrontPrivateKey = "PrivateKey";

const config: CodegenConfig = {
  schema: [
    {
      [graphqlEndpoint]: {
        headers: {
          ["Shopify-Storefront-Private-Token"]: storeFrontPrivateKey,
        },
      },
    },
  ],
  documents: ["src/**/*.{ts, tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./src/shopify/generated/": {
      preset: "client",
      plugins: [],
    },
  },
  config: {
    scalars: {
      DateTime: "string",
      Decimal: "string",
      HTML: "string",
      Money: "string",
      URL: "string",
    },
  },
};
export default config;
