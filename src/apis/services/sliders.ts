import api from "@/apis";

export const slidersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSliders: build.query({
      query: ({ page_size = 50, ...otherParams }) => ({
        url: "/sliders/",
        params: { page_size, ...otherParams },
      }),
    }),
  }),
});

export const { useGetSlidersQuery } = slidersApi;
