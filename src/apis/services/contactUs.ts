import api from "@/apis";

export const contactUsApi = api.injectEndpoints({
  endpoints: (build) => ({
    postContactUs: build.mutation({
      query: (body) => ({
        url: "/contact-us/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { usePostContactUsMutation } = contactUsApi;
