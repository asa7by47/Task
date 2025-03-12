import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { openFundFirstTime } from "@/redux/appReducer";

const useOpenFundFirstTime = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const checkOpenForFirstTime = async () => {
      const openOnBoarding = await AsyncStorage.getItem("fundSubmittedFlag");

      if (openOnBoarding) {
        dispatch(openFundFirstTime(openOnBoarding));
      }
    };
    checkOpenForFirstTime();
  }, [dispatch]);

  return {};
};

export default useOpenFundFirstTime;
