import api from "@/apis";
import {
  AuthTokenResponse,
  LoginBody,
  emailBody,
  User,
  VerifyBody,
} from "../@types/auth";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserInfo: build.query<User, void>({
      query: () => ({
        url: "/users/me/",
      }),
      providesTags: ["User"],
    }),

    login: build.mutation<AuthTokenResponse, LoginBody>({
      query: (body) => ({
        url: "/users/auth/login/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    sendEmailForVerify: build.mutation<AuthTokenResponse, emailBody>({
      query: (body) => ({
        url: "/users/auth/register/",
        method: "POST",
        body,
      }),
    }),

    verifyEmail: build.mutation<AuthTokenResponse, VerifyBody>({
      query: (body) => ({
        url: "/users/auth/verify/",
        method: "POST",
        body,
      }),
    }),

    updateUserData: build.mutation<
      User,
      { body: FormData; Authentication: string }
    >({
      query: ({ body, Authentication }) => ({
        url: "/users/me/",
        method: "PATCH",
        body,
        headers: {
          Authorization: `Token ${Authentication}`,
        },
      }),
    }),

    logout: build.mutation({
      query: (body) => ({
        url: "users/auth/logout/",
        method: "POST",
        body,
      }),
    }),

    facebookLogin: build.mutation({
      query: (body) => ({
        url: "/users/auth/facebook/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    googleLogin: build.mutation({
      query: (body) => ({
        url: "/users/auth/google/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    appleLogin: build.mutation({
      query: (body) => ({
        url: "/users/auth/apple/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useLazyGetUserInfoQuery,
  useLoginMutation,
  useSendEmailForVerifyMutation,
  useVerifyEmailMutation,
  useUpdateUserDataMutation,
  useLogoutMutation,
  useFacebookLoginMutation,
  useGoogleLoginMutation,
  useAppleLoginMutation,
} = authApi;
