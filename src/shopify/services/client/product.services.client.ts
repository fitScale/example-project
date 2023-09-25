import type {
  GetProductListQuery,
  GetProductSingleQuery,
  GetCollectionListQuery,
  GetCollectionSingleQuery,
} from "@/shopify/generated/graphql";
import { ProductServerServices } from "../server/product.services.server";

export namespace ProductClientServices {
  export const parseProductSingle = (res: GetProductSingleQuery) => {
    return {
      productId: res.product?.id,
      title: res.product?.title,
      description: res.product?.description,
      images: res.product?.images.edges.map((e) => {
        return {
          src: e.node.src,
          altText: e.node.altText,
          height: e.node.height,
          width: e.node.width,
        };
      }),
      priceRange: {
        maxVariantPrice: res.product?.priceRange.maxVariantPrice,
        minVariantPrice: res.product?.priceRange.minVariantPrice,
      },
      seo: {
        title: res.product?.seo.title,
        description: res.product?.seo.description,
      },
      variants: res.product?.variants.edges.map((e) => {
        return {
          id: e.node.id,
          title: e.node.title,
          image: e.node.image,
          price: e.node.priceV2,
          comparePrice: e.node.compareAtPriceV2,
          quanityAvalible: e.node.quantityAvailable,
          metaField: e.node.metafield,
        };
      }),
    };
  };

  export const parseProductList = (res: GetProductListQuery) => {
    return {
      products: res.products.edges.map((e) => {
        return {
          id: e.node.id,
          title: e.node.title,
          images: e.node.images.edges.map((e) => {
            return {
              src: e.node.src,
              altText: e.node.altText,
              height: e.node.height,
              width: e.node.width,
            };
          }),
          priceRange: {
            maxVariantPrice: e.node.priceRange.maxVariantPrice,
            minVariantPrice: e.node.priceRange.minVariantPrice,
          },
          variants: e.node.variants.edges.map((e) => {
            return {
              id: e.node.id,
              title: e.node.title,
              images: e.node.image,
              price: {
                ammount: e.node.priceV2.amount,
                currencyCode: e.node.priceV2.currencyCode,
              },
              quantityAvalible: e.node.quantityAvailable,
            };
          }),
        };
      }),
      filters: res.products.filters,
      pageInfo: res.products.pageInfo,
    };
  };

  export const parseCollectionSingle = (
    res: GetCollectionSingleQuery
  ): Awaited<
    ReturnType<(typeof ProductServerServices)["getCollectionSingle"]>
  > => {
    return {
      collection: {
        id: res.collection?.id,
        title: res.collection?.title,
        seo: res.collection?.seo,
        products: {
          products: res.collection!.products.edges.map((e) => {
            return {
              id: e.node.id,
              title: e.node.title,
              images: e.node.images.edges.map((e) => {
                return {
                  src: e.node.src,
                  altText: e.node.altText,
                  height: e.node.height,
                  width: e.node.width,
                };
              }),
              priceRange: {
                maxVariantPrice: e.node.priceRange.maxVariantPrice,
                minVariantPrice: e.node.priceRange.minVariantPrice,
              },
              variants: e.node.variants.edges.map((e) => {
                return {
                  title: e.node.title,
                  id: e.node.id,
                  price: e.node.priceV2,
                  comparePrice: e.node.compareAtPriceV2,
                  image: e.node.image?.src,
                  quantity: e.node.quantityAvailable,
                  metaField: e.node.metafield,
                };
              }),
            };
          }),
          filters: res.collection?.products.filters,
          pageInfo: res.collection?.products.pageInfo,
        },
      },
    };
  };

  export const parseCollectionList = (res: GetCollectionListQuery) => {
    return {
      collections: res.collections.edges.map((e) => {
        return {
          id: e.node.id,
          title: e.node.title,
          seo: e.node.seo,
        };
      }),
      pageInfo: res.collections.pageInfo,
    };
  };
}
