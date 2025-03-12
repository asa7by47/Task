import { ReactNode } from "react";
import { DimensionValue, ViewStyle } from "react-native";

export interface ModalWrapperProps {
  isVisible: boolean;
  setVisible: (state: boolean) => void;
  children: ReactNode;
  containerStyle?: ViewStyle;
  cannotDismiss?: boolean;
  height?: number | DimensionValue;
  onDismiss?: () => void;
  hideCloseIcon?: boolean;
  closeIconContainerStyle?: ViewStyle;
  closeIconColor?: string;
  closeIconSize?: number;
  headerTitle?: string;
}
