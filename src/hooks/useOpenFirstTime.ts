import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { openFirstTime } from "@/redux/appReducer";

const useOpenFirstTime = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkOpenForFirstTime = async () => {
      const openOnBoarding = await AsyncStorage.getItem(
        "openOnBoardingForFirstTime"
      );

      if (!openOnBoarding) {
        await AsyncStorage.setItem("openOnBoardingForFirstTime", "true");
        dispatch(openFirstTime("OnBoarding"));
      } else {
        dispatch(openFirstTime("Welcome"));
      }
    };

    checkOpenForFirstTime();
  }, [dispatch]);

  return {};
};

export default useOpenFirstTime;
