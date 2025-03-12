import { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import styles from "./styles";
import COLORS from "@/constants/Colors";

function OverlayWrapper({
  children,
  overlayColor = COLORS.lightPrimary,
  customContainerStyle,
}: {
  children?: ReactNode;
  overlayColor?: string;
  customContainerStyle?: ViewStyle;
}) {
  const overlayStyle = {
    backgroundColor: overlayColor,
    ...customContainerStyle,
  };
  return <View style={[styles.container, overlayStyle]}>{children}</View>;
}

export default OverlayWrapper;
