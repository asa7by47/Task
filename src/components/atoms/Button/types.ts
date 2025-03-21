import { GestureResponderEvent, TextStyle, ViewStyle } from "react-native";
import { TranslationKeyEnum } from "@/@types/TranslationKeyEnum";

export interface ButtonProps {
  title?: string;
  i18nKey?: TranslationKeyEnum;
  onPress: (event: GestureResponderEvent) => void;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  disabled?: boolean;
  btnHeight?: number;
  btnWidth?: number;
  buttonCustomStyle?: ViewStyle;
  textCustomStyle?: TextStyle;
  textLineHeight?: number;
  fontSize?: number;
  iconSize?: number;
  prefix?: JSX.Element;
  IconName?: string;
  isLoading?: boolean;
  suffix?: JSX.Element;
  isFullWidth?: boolean;
  isShadow?: boolean;
}
