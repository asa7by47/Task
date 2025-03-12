import { View, ViewStyle } from "react-native";
import catGif from "@/assets/images/cat.gif";
import Img from "../Image";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import styles from "./styles";

function GifLoader({
  customContainerStyle,
}: {
  customContainerStyle?: ViewStyle;
}) {
  return (
    <View
      style={[
        GLOBAL_STYLES.row,
        styles.centering,
        GLOBAL_STYLES.fullSize,
        customContainerStyle,
      ]}
    >
      <Img source={catGif} alt="Gif Loader" style={styles.gif} />
    </View>
  );
}

export default GifLoader;
