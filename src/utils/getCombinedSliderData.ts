import { BackgroundContentCardProps } from "@/components/molecules/BackgroundContentCard/types";
import workoutSessions from "@/constants/homeDummyData";

// eslint-disable-next-line import/prefer-default-export
export const getCombinedSliderData = (
  announcements?: { results: BackgroundContentCardProps[] },
  sliders?: { results: (typeof workoutSessions)[0][] }
) => {
  const announcementsData =
    announcements?.results?.map((item) => ({
      ...item,
      type: "announcement",
    })) || [];

  const slidersData = !sliders?.results?.length
    ? workoutSessions
    : sliders?.results?.map((item) => ({
        ...item,
        type: "slider",
      })) || [];

  return [...announcementsData, ...slidersData];
};
