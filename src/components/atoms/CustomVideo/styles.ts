import { StyleSheet } from "react-native";
import METRICS from "@/constants/Metrics";
import COLORS from "@/constants/Colors";

const styles = StyleSheet.create({
  loadingFullContainer: {
    alignItems: "center",
    backgroundColor: COLORS.grey,
    height: "100%",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
  },
  video: {
    height: "100%",
    width: "100%",
  },
  videoContainer: {
    height: METRICS.screenHeight,
    width: METRICS.screenWidth,
  },
});

export default styles;
