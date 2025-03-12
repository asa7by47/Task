import { StyleProp, ViewStyle } from "react-native";

export interface SwitchAtomProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  customStyle?: StyleProp<ViewStyle>; // Optional custom style
}
