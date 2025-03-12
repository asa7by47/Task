import { I18nManager, StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  errorBorder: {
    borderColor: COLORS.danger,
    borderWidth: 1,
  },
  errorText: {
    ...GLOBAL_STYLES.font500,
    color: COLORS.danger,
    fontSize: 12,
  },
  hintText: {
    color: COLORS.secondary,
    fontSize: 14,
    ...GLOBAL_STYLES.font500,
  },
  input: {
    color: COLORS.primary,
    flex: 1,
    fontSize: 13,
    textAlign: I18nManager.isRTL ? "right" : "left",
    textAlignVertical: "center",
    width: "100%",
    ...GLOBAL_STYLES.font600,
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: COLORS.transparent,
    borderColor: COLORS.greyB6,
    borderRadius: 19,
    borderWidth: 1,
    flexDirection: "row",
    height: 41,
    paddingHorizontal: 20,
    width: "100%",
  },
  inputDescription: {
    color: COLORS.gray8C,
    fontFamily: GLOBAL_STYLES.font600.fontFamily,
    fontSize: 9,
    marginStart: 20,
    marginTop: 2,
  },
  labelText: {
    color: COLORS.dark,
    fontSize: 14,
    marginStart: 5,
    ...GLOBAL_STYLES.font600,
  },
  spaceAround: { marginHorizontal: 5 },
  spaceBottom: { marginBottom: 15 },
  spaceEnd10: { marginEnd: 10 },
  textAreaContainer: {
    alignItems: "flex-start",
    height: 187,
    paddingVertical: 20,
  },
  textAreaInput: {
    marginTop: -7,
    textAlignVertical: "top",
  },
});

export default styles;
