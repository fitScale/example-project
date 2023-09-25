"use client";

import {
  addCartItemMutation,
  applyDiscountMutation,
  createCartMutation,
} from "@/shopify/graphql/mutations/cart.mutations";
import { getProductListQuery } from "@/shopify/graphql/queries/product.queries";
import { CartClientServices } from "@/shopify/services/client/cart.services.client";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";

const Page = () => {
  const [createMutation] = useMutation(createCartMutation);
  const [addMutation] = useMutation(addCartItemMutation);
  const [discountMutiation] = useMutation(applyDiscountMutation);

  const router = useRouter();

  const { data } = useQuery(getProductListQuery, {
    variables: { first: 10 },
  });

  console.log(data);

  const checkout = async () => {
    const cart = await CartClientServices.createCart(createMutation, {
      merchandiseId: "gid://shopify/ProductVariant/45611770020132",
      quantity: 1,
    });

    const productTwos = await CartClientServices.addCartItem(
      addMutation,
      createMutation,
      {
        cartId: cart.cart.id!,
        merchandiseId: "gid://shopify/ProductVariant/45611770020132",
        quantity: 1,
      }
    );

    const discount = await CartClientServices.applyDiscount(discountMutiation, {
      cartId: cart.cart.id!,
      codes: ["RW83GCRQ1D1G"],
    });

    router.push(cart.cart.checkoutUrl!);
  };

  return (
    <div>
      <button
        onClick={() => {
          checkout();
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default Page;
