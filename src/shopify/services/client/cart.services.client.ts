import type {
  ApplyDiscountMutation,
  CreateCartMutation,
  Exact,
} from "@/shopify/generated/graphql";
import Cookies from "js-cookie";

import type {
  GetCartQuery,
  GetCartCountQuery,
  AddCartItemMutation,
  UpdateCartItemsMutation,
  CartLineUpdateInput,
  RemoveCartItemMutation,
  InputMaybe,
} from "@/shopify/generated/graphql";

import {
  type MutationFunctionOptions,
  type DefaultContext,
  type ApolloCache,
  type FetchResult,
  useMutation,
} from "@apollo/client";
import { applyDiscountMutation } from "@/shopify/graphql/mutations/cart.mutations";

export namespace CartClientServices {
  export type createCartMutationFn = (
    options?:
      | MutationFunctionOptions<
          CreateCartMutation,
          Exact<{
            merchandiseId: string;
            quantity: number;
            sellingPlanId?: InputMaybe<string> | undefined;
          }>,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<CreateCartMutation>>;

  export type discountMutation = (
    options?:
      | MutationFunctionOptions<
          ApplyDiscountMutation,
          Exact<{
            cartId: string;
            discountCodes?: InputMaybe<string | string[]> | undefined;
          }>,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<ApplyDiscountMutation>>;

  export const applyDiscount = async (
    mutation: discountMutation,
    variables: {
      codes: string[];
      cartId: string;
    }
  ) => {
    const res = await mutation({
      variables: {
        cartId: variables.cartId,
        discountCodes: variables.codes,
      },
    });
    return {
      errors: res.data?.cartDiscountCodesUpdate?.userErrors,
    };
  };

  export const createCart = async (
    mutation: createCartMutationFn,
    variables: {
      merchandiseId: string;
      quantity: number;
      sellingPlanId?: string;
    }
  ) => {
    const res = await mutation({
      variables: {
        merchandiseId: variables.merchandiseId,
        quantity: variables.quantity,
        sellingPlanId: variables.sellingPlanId,
      },
    });

    Cookies.set("appClient_cartId", res.data?.cartCreate?.cart?.id!);
    return {
      cart: {
        id: res.data?.cartCreate?.cart?.id,
        checkoutUrl: res.data?.cartCreate?.cart?.checkoutUrl,
      },
    };
  };

  export const parseCart = (res: GetCartQuery) => {
    return {
      cart: {
        checkoutUrl: res.cart?.checkoutUrl,
        id: res.cart?.id,
        price: res.cart?.cost,
        lines: res.cart?.lines.edges.map((e) => {
          return {
            lineId: e.node.id,
            merchandise: e.node.merchandise,
            estimatedCost: e.node.estimatedCost,
            quantity: e.node.quantity,
            productId: e.node.merchandise.product.id,
          };
        }),
        totalQuantity: res.cart?.totalQuantity,
      },
    };
  };

  export const parseCartCount = (res: GetCartCountQuery) => {
    return {
      cart: {
        id: res.cart?.id,
        totalQuantity: res.cart?.totalQuantity,
      },
    };
  };

  export type addCartItemMutationFn = (
    options?:
      | MutationFunctionOptions<
          AddCartItemMutation,
          Exact<{
            cartId: string;
            merchandiseId: string;
            quantity: number;
          }>,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<AddCartItemMutation>>;

  export const addCartItem = async (
    addMutation: addCartItemMutationFn,
    createMutation: createCartMutationFn,
    variables: { cartId?: string; merchandiseId: string; quantity: number }
  ) => {
    if (variables.cartId === undefined) {
      const res = await createCart(createMutation, {
        merchandiseId: variables.merchandiseId,
        quantity: variables.quantity,
      });
      return {
        cart: {
          id: res.cart.id,
          checkoutUrl: res.cart.checkoutUrl,
        },
      };
    } else {
      const res = await addMutation({
        variables: {
          cartId: variables.cartId,
          merchandiseId: variables.merchandiseId,
          quantity: variables.quantity,
        },
      });

      return {
        cart: {
          id: res.data?.cartLinesAdd?.cart?.id,
          totalQuantity: res.data?.cartLinesAdd?.cart?.totalQuantity,
          checkoutUrl: res.data?.cartLinesAdd?.cart?.checkoutUrl,
        },
      };
    }
  };

  export type updateCartItemMutationFn = (
    options?:
      | MutationFunctionOptions<
          UpdateCartItemsMutation,
          Exact<{
            cartId: string;
            lines: CartLineUpdateInput | CartLineUpdateInput[];
          }>,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<UpdateCartItemsMutation>>;

  export const updateCartItem = async (
    mutation: updateCartItemMutationFn,
    variables: {
      cartId: string;
      lines: CartLineUpdateInput | CartLineUpdateInput[];
    }
  ) => {
    const res = await mutation({
      variables: { cartId: variables.cartId, lines: variables.lines },
    });

    return {
      cart: {
        id: res.data?.cartLinesUpdate?.cart?.id,
      },
    };
  };

  export type removeCartItemMutationFn = (
    options?:
      | MutationFunctionOptions<
          RemoveCartItemMutation,
          Exact<{
            cartId: string;
            lineIds: string | string[];
          }>,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => Promise<FetchResult<RemoveCartItemMutation>>;

  export const removeCartItem = async (
    mutation: removeCartItemMutationFn,
    variables: {
      cartId: string;
      lineIds: string | string[];
    }
  ) => {
    const res = await mutation({
      variables: { cartId: variables.cartId, lineIds: variables.lineIds },
    });

    return {
      cart: {
        id: res.data?.cartLinesRemove?.cart?.id,
      },
    };
  };
}
