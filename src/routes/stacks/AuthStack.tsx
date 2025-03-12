import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import MainScreenOptions from "../MainScreenOptions";
import { AuthStackParamList } from "../types";
import Register from "@/screens/auth/Register";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={MainScreenOptions as NativeStackNavigationOptions}
    >
      <Stack.Group>
        <Stack.Screen
          name="Register"
          component={Register}
          initialParams={{
            title: "Register screen",
            isRightComponentHidden: true,
          }}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
