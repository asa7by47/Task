import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { MainStackParamList } from "../types";
import MainScreenOptions from "../MainScreenOptions";
import HomeScreen from "@/screens/main/Home";

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={MainScreenOptions as NativeStackNavigationOptions}
    >
      {/* MAIN SCREENS */}
      <Stack.Group>
        <Stack.Screen
          name="Root"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
