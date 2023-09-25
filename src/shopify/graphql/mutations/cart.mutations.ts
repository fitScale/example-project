import { graphql } from "../../generated";

export const createCartMutation = graphql(`
  mutation createCart(
    $merchandiseId: ID!
    $quantity: Int!
    $sellingPlanId: ID
  ) {
    cartCreate(
      input: {
        lines: {
          merchandiseId: $merchandiseId
          quantity: $quantity
          sellingPlanId: $sellingPlanId
        }
      }
    ) {
      cart {
        id
        checkoutUrl
      }
    }
  }
`);

export const addCartItemMutation = graphql(`
  mutation addCartItem(
    $cartId: ID!
    $merchandiseId: ID!
    $quantity: Int!
    $sellingPlanId: ID
  ) {
    cartLinesAdd(
      cartId: $cartId
      lines: {
        merchandiseId: $merchandiseId
        quantity: $quantity
        sellingPlanId: $sellingPlanId
      }
    ) {
      cart {
        id
        totalQuantity
        checkoutUrl
      }
    }
  }
`);

export const updateCartItemMutation = graphql(`
  mutation updateCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
      }
    }
  }
`);

export const removeCartItemMutation = graphql(`
  mutation removeCartItem($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
      }
    }
  }
`);

export const applyDiscountMutation = graphql(`
  mutation applyDiscount($cartId: ID!, $discountCodes: [String!]) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
      userErrors {
        field
        message
      }
    }
  }
`);
