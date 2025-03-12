import api from "@/apis";
import { PaginatedResponse, PaginationParams } from "../@types/general";
import { MeetTheTeamApiTypes } from "../@types/meetTheTeam";
import getSerializedQueryArgs from "@/utils/getSerializedQueryArgs";
import infintyPaginationMergeHandler from "@/utils/infintyPaginationMergeHandler";

export const meetTheTeamApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTeamCoaches: build.query<
      PaginatedResponse<MeetTheTeamApiTypes>,
      PaginationParams
    >({
      query: ({ page = 1, page_size = 5, ...otherParams }) => ({
        url: "/team-members/",
        params: { page, page_size, ...otherParams },
      }),
      serializeQueryArgs: getSerializedQueryArgs,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
      merge: infintyPaginationMergeHandler,
      providesTags: ["TeamMembers"],
    }),
    getSingleCoach: build.query({
      query: (id) => ({
        url: `/team-members/${id}/`,
      }),
    }),
  }),
});

export const {
  useGetTeamCoachesQuery,
  useLazyGetTeamCoachesQuery,
  useGetSingleCoachQuery,
} = meetTheTeamApi;
