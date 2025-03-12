import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UseHandleOpeningView = () => {
  const [isOpenSheet, setIsOpenSheet] = useState<string | null>(null);

  useEffect(() => {
    const fetchOpeningData = async () => {
      const openFinancialAssessmentSheet = await AsyncStorage.getItem(
        "openFinancialAssessmentSheet"
      );

      setIsOpenSheet(openFinancialAssessmentSheet);
    };

    fetchOpeningData();
  }, []);

  return { isOpenSheet };
};

export default UseHandleOpeningView;
