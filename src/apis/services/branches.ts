import api from "@/apis";
import { PaginatedResponse, PaginationParams } from "../@types/general";
import getSerializedQueryArgs from "@/utils/getSerializedQueryArgs";
import infintyPaginationMergeHandler from "@/utils/infintyPaginationMergeHandler";
import { BranchesApiTypes } from "../@types/branches";

export const branchesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBranches: build.query<
      PaginatedResponse<BranchesApiTypes>,
      PaginationParams
    >({
      query: ({ page = 1, page_size = 5, ...otherParams }) => ({
        url: "/branches/",
        params: { page, page_size, ...otherParams },
      }),
      serializeQueryArgs: getSerializedQueryArgs,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
      merge: infintyPaginationMergeHandler,
      providesTags: ["Branches"],
    }),
  }),
});

export const { useLazyGetBranchesQuery, useGetBranchesQuery } = branchesApi;
