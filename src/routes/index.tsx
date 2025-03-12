import { useEffect } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import ReactNativeModal from "react-native-modal";
import NotificationListnerContainer from "@/components/templates/NotificationListnerContainer";
import useCheckNewUpdates from "@/hooks/useCheckNewUpdate";
import COLORS from "@/constants/Colors";
import LinkingConfiguration from "./LinkingConfiguration";
import MainStack from "./stacks/MainStack";
import AuthStack from "./stacks/AuthStack";
import { RootState } from "@/redux";
import useCheckingForcedStoreUpdate from "@/hooks/useCheckingForcedStoreUpdate";
import useCheckAuthTokenExistance from "@/hooks/useCheckAuthTokenExistance";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import SnackbarComponent from "@/components/atoms/SnackbarComponent";
import useOpenFirstTime from "@/hooks/useOpenFirstTime";

function Route() {
  const isSignedIn = useSelector((state: RootState) => state.auth.token);

  useCheckNewUpdates();
  useCheckingForcedStoreUpdate();
  useCheckAuthTokenExistance();
  useOpenFirstTime();

  // User login
  useEffect(() => {
    if (isSignedIn) {
      // nothing here
    }
  }, [isSignedIn]);

  const navTheme = DefaultTheme;
  navTheme.colors.background = COLORS.light;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={GLOBAL_STYLES.fullSize}>
        <NavigationContainer theme={navTheme} linking={LinkingConfiguration}>
          <NotificationListnerContainer>
            {!isSignedIn ? <AuthStack /> : <MainStack />}
            {/* GENERAL MODALS */}
            <SnackbarComponent />
            <ReactNativeModal>
              <SnackbarComponent />
            </ReactNativeModal>
          </NotificationListnerContainer>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Route;
