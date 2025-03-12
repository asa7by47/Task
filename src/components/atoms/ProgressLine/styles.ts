import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.duskyCyan,
    borderRadius: 12,
    height: 6,
    width: "100%",
  },
  progress: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    height: 6,
  },
});

export default styles;
