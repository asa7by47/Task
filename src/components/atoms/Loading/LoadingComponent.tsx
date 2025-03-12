import { ActivityIndicator, StyleSheet, View, ViewStyle } from "react-native";
import Colors from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  centering: { justifyContent: "center" },
});

export default function LoadingComponent({
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
      <ActivityIndicator size="small" color={Colors.primary} />
    </View>
  );
}
