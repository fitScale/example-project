import storeFrontPrivateClient from "@/shopify/storeFront.server.client";

import {
  getCollectionListQuery,
  getCollectionSingleQuery,
  getProductListQuery,
  getProductSingleQuery,
} from "@/shopify/graphql/queries/product.queries";

export namespace ProductServerServices {
  export const getProductSingle = async (productId: string) => {
    const res = await storeFrontPrivateClient.request(getProductSingleQuery, {
      productId,
    });

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
      sellingPlansGroups: res.product?.sellingPlanGroups.edges.map((e) => {
        return {
          groupName: e.node.name,
          sellingPlans: e.node.sellingPlans.edges.map((e) => {
            return {
              sellingPlanId: e.node.id,
              sellingPlanName: e.node.name,
              sellingPlanDescription: e.node.description,
            };
          }),
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
          quantityAvailable: e.node.quantityAvailable,
          currentlyNotInStock: e.node.currentlyNotInStock,
          metaField: e.node.metafield,
        };
      }),
      metaField: res.product?.metafields,
    };
  };

  export const getProductList = async (first: number, after?: string) => {
    const res = await storeFrontPrivateClient.request(getProductListQuery, {
      first,
      after,
    });

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
            };
          }),
        };
      }),
      filters: res.products.filters,
      pageInfo: res.products.pageInfo,
    };
  };

  export const getCollectionSingle = async (
    collectionId: string,
    first: number,
    after?: string
  ) => {
    const res = await storeFrontPrivateClient.request(
      getCollectionSingleQuery,
      {
        collectionId,
        first,
        after,
      }
    );

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

  export const getCollectionList = async (first: number, after?: string) => {
    const res = await storeFrontPrivateClient.request(getCollectionListQuery, {
      first,
      after,
    });

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
