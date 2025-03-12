import { Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const METRICS = {
  screenWidth: WIDTH,
  screenHeight: HEIGHT,
  bottomTabsHeight: 75,
  headerHeight: getStatusBarHeight(),
  generalSpacingValue: WIDTH * 0.035,
};

export default METRICS;
