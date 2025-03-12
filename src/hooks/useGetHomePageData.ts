import { useState } from "react";
import { useLazyGetServicesQuery } from "@/apis/services/services";
import usePaginatedRequest from "./usePaginatedRequest";
import { useLazyGetTestimonialsQuery } from "@/apis/services/testimonials";

const useGetHomePageData = (props?: number) => {
  const [page, setPage] = useState(1);
  const [testimonialsPage, setTestimonialsPage] = useState(1);

  const {
    data: PaginatedServicesData,
    loadMoreData: loadMoreServicesData,
    isLoading: isServicesLoading,
  } = usePaginatedRequest({
    page,
    setPage,
    rtkLazyHook: useLazyGetServicesQuery,
    params: {
      sessionId: props,
    },
  });

  const {
    data: PaginatedTestimonialsData,
    loadMoreData: loadMoreTestimonialsData,
    isLoading: isTestimonialsLoading,
  } = usePaginatedRequest({
    page: testimonialsPage,
    setPage: setTestimonialsPage,
    rtkLazyHook: useLazyGetTestimonialsQuery,
    params: {},
  });

  const isDataLoading = isServicesLoading || isTestimonialsLoading;

  return {
    PaginatedServicesData,
    loadMoreServicesData,
    isDataLoading,
    PaginatedTestimonialsData,
    loadMoreTestimonialsData,
  };
};

export default useGetHomePageData;
