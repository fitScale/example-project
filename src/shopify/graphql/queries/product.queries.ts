import { graphql } from "../../generated";

export const getProductSingleQuery = graphql(`
  query getProductSingle($productId: ID!) {
    product(id: $productId) {
      description
      id
      images(first: 250) {
        edges {
          node {
            altText
            height
            width
            src
          }
        }
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      seo {
        description
        title
      }
      title
      variants(first: 250) {
        edges {
          node {
            id
            title
            priceV2 {
              currencyCode
              amount
            }
            availableForSale
            currentlyNotInStock
            quantityAvailable
            compareAtPriceV2 {
              currencyCode
              amount
            }
            image {
              src
              width
              height
              altText
            }
            metafield(key: "productdata", namespace: "custom") {
              value
              key
            }
          }
        }
      }
      sellingPlanGroups(first: 10) {
        edges {
          node {
            appName
            name
            options {
              name
              values
            }
            sellingPlans(first: 10) {
              edges {
                node {
                  checkoutCharge {
                    type
                    value {
                      ... on MoneyV2 {
                        __typename
                        amount
                        currencyCode
                      }
                      ... on SellingPlanCheckoutChargePercentageValue {
                        __typename
                        percentage
                      }
                    }
                  }
                  description
                  id
                  name
                  options {
                    name
                    value
                  }
                  recurringDeliveries
                  priceAdjustments {
                    adjustmentValue {
                      ... on SellingPlanPercentagePriceAdjustment {
                        __typename
                        adjustmentPercentage
                      }
                    }
                    orderCount
                  }
                }
              }
            }
          }
        }
      }
      metafields(identifiers: { namespace: "", key: "" }) {
        value
        key
        namespace
      }
    }
  }
`);

export const getProductListQuery = graphql(`
  query getProductList($first: Int!, $after: String) {
    products(first: $first, after: $after) {
      edges {
        node {
          id
          title
          images(first: 1) {
            edges {
              node {
                altText
                height
                width
                src
              }
            }
          }
          priceRange {
            maxVariantPrice {
              currencyCode
              amount
            }
            minVariantPrice {
              currencyCode
              amount
            }
          }
          variants(first: 250) {
            edges {
              node {
                id
                image {
                  src
                  altText
                  height
                  width
                }
                priceV2 {
                  amount
                  currencyCode
                }
                title
                quantityAvailable
              }
            }
          }
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      filters {
        type
        label
        id
        values {
          count
          id
          input
          label
        }
      }
    }
  }
`);

export const getCollectionSingleQuery = graphql(`
  query getCollectionSingle($collectionId: ID!, $first: Int!, $after: String) {
    collection(id: $collectionId) {
      id
      title
      seo {
        description
        title
      }
      products(first: $first, after: $after) {
        edges {
          node {
            id
            title
            images(first: 1) {
              edges {
                node {
                  altText
                  height
                  width
                  src
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                currencyCode
                amount
              }
            }
            variants(first: 250) {
              edges {
                node {
                  availableForSale
                  currentlyNotInStock
                  id
                  image {
                    src
                  }
                  priceV2 {
                    amount
                    currencyCode
                  }
                  title
                  quantityAvailable
                  compareAtPriceV2 {
                    currencyCode
                    amount
                  }
                  metafield(key: "productdata", namespace: "custom") {
                    value
                    key
                  }
                }
              }
            }
          }
        }
        filters {
          values {
            count
            id
            input
            label
          }
          id
          label
          type
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`);

export const getCollectionListQuery = graphql(`
  query getCollectionList($first: Int!, $after: String) {
    collections(first: $first, after: $after) {
      edges {
        node {
          id
          title
          seo {
            title
            description
          }
        }
      }
      pageInfo {
        startCursor
        hasPreviousPage
        hasNextPage
        endCursor
      }
    }
  }
`);
