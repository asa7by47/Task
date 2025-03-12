import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import METRICS from "@/constants/Metrics";

const styles = StyleSheet.create({
  closeSection: { justifyContent: "flex-end" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalContainer: {
    alignSelf: "center",
    backgroundColor: COLORS.light,
    borderRadius: 14,
    padding: 20,
    width: METRICS.screenWidth * 0.8,
  },
});

export default styles;
