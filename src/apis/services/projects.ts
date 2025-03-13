import api from "@/apis";
import { AuthTokenResponse, LoginBody, Projects } from "../@types/auth";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query<Projects, void>({
      query: () => ({
        url: "/api/portfolio",
      }),
      providesTags: ["Projects"],
    }),

    login: build.mutation<AuthTokenResponse, LoginBody>({
      query: (body) => ({
        url: "/api/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetProjectsQuery, useLoginMutation } = authApi;
