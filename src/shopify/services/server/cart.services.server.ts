import {
  getCartCountQuery,
  getCartQuery,
} from "@/shopify/graphql/queries/cart.queries";
import storeFrontPrivateClient from "@/shopify/storeFront.server.client";

export namespace CartServerServices {
  export const getCart = async (cartId: string) => {
    const res = await storeFrontPrivateClient.request(getCartQuery, { cartId });

    return {
      cart: {
        checkoutUrl: res.cart?.checkoutUrl,
        id: res.cart?.id,
        lines: res.cart?.lines.edges.map((e) => {
          return {
            merchandise: e.node.merchandise,
            estimatedCost: e.node.estimatedCost,
            quantity: e.node.quantity,
          };
        }),
        totalQuantity: res.cart?.totalQuantity,
      },
    };
  };

  export const getCartCount = async (cartId: string) => {
    const res = await storeFrontPrivateClient.request(getCartCountQuery, {
      cartId,
    });

    return {
      cart: {
        id: res.cart?.id,
        totalQuantity: res.cart?.totalQuantity,
      },
    };
  };
}
