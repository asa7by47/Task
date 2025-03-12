/* eslint-disable react-native/sort-styles */
import { I18nManager, StyleSheet } from "react-native";
import METRICS from "./Metrics";

const GLOBAL_STYLES = StyleSheet.create({
  /* FONTS */
  font800: {
    fontFamily: "font800",
  },
  fontFu500: {
    fontFamily: "fontFu500",
  },
  font500: {
    fontFamily: "font500",
  },
  font600: {
    fontFamily: "font600",
  },
  fontFuItalic700: {
    fontFamily: "fontFuItalic700",
  },
  mainContainer: {
    padding: METRICS.generalSpacingValue,
  },
  flatlistProductColumnWrapper: {
    justifyContent: "space-between",
    padding: METRICS.generalSpacingValue,
    paddingVertical: "2%",
  },
  fullSize: {
    flex: 1,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  rowJustifyBetween: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  vhCentering: {
    alignItems: "center",
    justifyContent: "center",
  },
  flexGrow: {
    flexGrow: 1,
  },
  flipInArabic: {
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
});

export default GLOBAL_STYLES;
