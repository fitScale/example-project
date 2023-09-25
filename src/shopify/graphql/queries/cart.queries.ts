import { graphql } from "../../generated";

export const getCartQuery = graphql(`
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      cost {
        subtotalAmount {
          amount
          currencyCode
        }
        totalAmount {
          currencyCode
          amount
        }
      }
      lines(first: 250) {
        edges {
          node {
            id
            merchandise {
              ... on ProductVariant {
                id
                priceV2 {
                  amount
                  currencyCode
                }
                image {
                  altText
                  height
                  width
                  src
                }
                title
                product {
                  id
                }
              }
            }
            quantity
            estimatedCost {
              subtotalAmount {
                amount
                currencyCode
              }
              totalAmount {
                currencyCode
                amount
              }
            }
            cost {
              amountPerQuantity {
                amount
                currencyCode
              }
              subtotalAmount {
                currencyCode
                amount
              }
            }
          }
        }
      }
      totalQuantity
    }
  }
`);

export const getCartCountQuery = graphql(`
  query getCartCount($cartId: ID!) {
    cart(id: $cartId) {
      id
      totalQuantity
    }
  }
`);
