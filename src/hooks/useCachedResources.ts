import * as Font from "expo-font";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

import IcoMoon from "@/assets/icomoon/icomoon.ttf";
import font800 from "@/assets/fonts/FuturaPTCondExtraBold.otf";
import fontFuItalic700 from "@/assets/fonts/FuturaBoldItalicfont.ttf";
import font600Italic from "@/assets/fonts/Montserrat-SemiBoldItalic.ttf";
import fontFu500 from "@/assets/fonts/FuturaPTCondMedium.otf";
import font500 from "@/assets/fonts/Montserrat-Medium.ttf";
import font600 from "@/assets/fonts/Montserrat-SemiBold.ttf";

SplashScreen.preventAutoHideAsync();

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const [loaded] = Font.useFonts({
    IcoMoon,
    font800,
    fontFuItalic700,
    fontFu500,
    font500,
    font600,
    font600Italic,
  });

  const loadResourcesAndDataAsync = () => {
    SplashScreen.hideAsync();
    setLoadingComplete(true);
  };

  useEffect(() => {
    if (!loaded) return;

    loadResourcesAndDataAsync();
  }, [loaded]);

  return isLoadingComplete;
}
