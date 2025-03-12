import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  FlatList: {
    backgroundColor: COLORS.light,
    borderColor: COLORS.primary,
    borderRadius: 13,
    paddingVertical: 8,
  },
  item: {
    borderBottomColor: COLORS.greyB6,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  modalContainer: {
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
  },
  scrollIndicator: {
    bottom: 5,
    height: 25,
    position: "absolute",
    right: 0,
    width: 25,
    zIndex: 1,
  },
  selectedItem: {
    backgroundColor: COLORS.primary,
  },
  text: {
    color: COLORS.greyB6,
    fontSize: 13,
    ...GLOBAL_STYLES.font600,
  },
});

export default styles;
