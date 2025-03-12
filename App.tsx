import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import useCachedResources from "@/hooks/useCachedResources";
import Route from "@/routes";
import store from "@/redux";

export default function App() {
  const isLoadingComplete = useCachedResources();

  return (
    isLoadingComplete && (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar />
        <Provider store={store}>
          <Route />
        </Provider>
      </GestureHandlerRootView>
    )
  );
}
