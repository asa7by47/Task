import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import METRICS from "@/constants/Metrics";

const styles = StyleSheet.create({
  BottomNavigatorContainerStyle: {
    alignSelf: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 32,
    height: METRICS.bottomTabsHeight,
    paddingBottom: 5,
    width: METRICS.screenWidth * 1.05,
  },
  elevateButtonStyle: {
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: 75 / 2,
    height: 75,
    justifyContent: "center",
    top: -35,
    width: 75,
  },
  elevateLogo: {
    height: 53,
    width: 33,
  },
});

export default styles;
