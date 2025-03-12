import api from "@/apis";
import { PaginatedResponse, PaginationParams } from "../@types/general";
import { TestimonialsApi } from "../@types/testimonials";
import getSerializedQueryArgs from "@/utils/getSerializedQueryArgs";
import infintyPaginationMergeHandler from "@/utils/infintyPaginationMergeHandler";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTestimonials: build.query<
      PaginatedResponse<TestimonialsApi>,
      PaginationParams
    >({
      query: ({ page = 1, page_size = 5, ...otherParams }) => ({
        url: "/testimonials/",
        params: { page, page_size, ...otherParams },
      }),
      serializeQueryArgs: getSerializedQueryArgs,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
      merge: infintyPaginationMergeHandler,
      providesTags: ["Testimonials"],
    }),
  }),
});

export const { useLazyGetTestimonialsQuery } = authApi;
