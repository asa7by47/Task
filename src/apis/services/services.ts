import api from "@/apis";
import { Services } from "../@types/services";
import { PaginatedResponse, PaginationParams } from "../@types/general";
import getSerializedQueryArgs from "@/utils/getSerializedQueryArgs";
import infintyPaginationMergeHandler from "@/utils/infintyPaginationMergeHandler";

export const servicesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getServices: build.query<PaginatedResponse<Services>, PaginationParams>({
      query: ({ page = 1, page_size = 5, ...otherParams }) => ({
        url: "/services/",
        params: { page, page_size, ...otherParams },
      }),
      serializeQueryArgs: getSerializedQueryArgs,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
      merge: infintyPaginationMergeHandler,
    }),

    getSingleServices: build.query({
      query: (id) => ({
        url: `/services/${id}`,
      }),
    }),
  }),
});

export const {
  useGetServicesQuery,
  useLazyGetServicesQuery,
  useGetSingleServicesQuery,
} = servicesApi;
