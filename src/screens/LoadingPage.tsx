import { View } from "react-native";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import LoadingComponent from "../components/atoms/Loading/LoadingComponent";

export default function LoadingPage() {
  return (
    <View style={[GLOBAL_STYLES.fullSize, GLOBAL_STYLES.vhCentering]}>
      <LoadingComponent />
    </View>
  );
}
