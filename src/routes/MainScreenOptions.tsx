/* eslint-disable @typescript-eslint/no-explicit-any */
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { MainStackParamList } from "./types";
import styles from "./BottomNavigatorStyle";

export interface DefaultScreenOptionProps {
  route: RouteProp<MainStackParamList, keyof MainStackParamList>;
  navigation?: any;
}

export default function MainScreenOptions({
  route,
}: DefaultScreenOptionProps):
  | NativeStackNavigationOptions
  | BottomTabNavigationOptions {
  if (!route?.params)
    return {
      tabBarShowLabel: false,
    };

  return {
    tabBarShowLabel: false,
    tabBarStyle: styles.BottomNavigatorContainerStyle,
  };
}
