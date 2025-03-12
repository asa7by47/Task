import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserInfo } from "@/redux/authReducer";
import HandleErrors from "@/utils/handleErrors";
import { useLazyGetUserInfoQuery } from "@/apis/services/auth";

export default function useGetUserData({
  ifUseAsHook = true,
}: {
  ifUseAsHook?: boolean;
}) {
  const dispatch = useDispatch();
  const [getUserData] = useLazyGetUserInfoQuery();

  useEffect(() => {
    if (ifUseAsHook) {
      getUserInfo();
    }
  }, []);

  const getUserInfo = async () => {
    const userData = await AsyncStorage.getItem("userData");
    if (userData) {
      const storedUserData = JSON.parse(userData);
      dispatch(setUserInfo(storedUserData));
    } else {
      getData();
    }
  };

  const getData = () => {
    getUserData()
      .unwrap()
      .then((res) => {
        AsyncStorage.setItem("userData", JSON.stringify(res));
        dispatch(setUserInfo(res));
      })
      .catch((err) => HandleErrors(err));
  };

  return { getData };
}
