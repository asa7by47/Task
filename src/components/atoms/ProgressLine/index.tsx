import { View } from "react-native";
import styles from "./styles";
import { ProgressLineProps } from "./types";
import COLORS from "@/constants/Colors";

function ProgressLine({
  limit = 100,
  active = 10,
  parentColor = COLORS.duskyCyan,
  childColor = COLORS.primary,
  customHeight = 6,
}: ProgressLineProps) {
  const controlActivePercentage = active > 100 ? 100 : active;
  const progressWidth = (controlActivePercentage / limit) * 100;

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: parentColor,
        height: customHeight,
      }}
    >
      <View
        style={[
          styles.progress,
          {
            width: `${progressWidth}%`,
            backgroundColor: childColor,
            height: customHeight,
          },
        ]}
      />
    </View>
  );
}

export default ProgressLine;
