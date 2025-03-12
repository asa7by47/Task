import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 21,
    flexDirection: "row",
    height: 42,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  prefixSpacing: {
    marginEnd: 10,
  },
  smallSpaceEnd: { marginEnd: 4 },
  suffixSpacing: {
    marginStart: 10,
  },
  text: {
    color: COLORS.light,
    fontSize: 18,
    textAlign: "center",
    ...GLOBAL_STYLES.font800,
  },
});

export default styles;
