import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import GLOBAL_STYLES from "@/constants/GlobalStyles";
import COLORS from "@/constants/Colors";
import getShadowStyle from "@/utils/getShadowStyle";
import { ButtonProps } from "./types";
import Text from "@/components/atoms/Text";
import Icon from "@/components/atoms/Icon";
import styles from "./styles";

export default function Button({
  title,
  i18nKey,
  onPress,
  color = COLORS.light,
  backgroundColor = COLORS.primary,
  borderColor,
  disabled = false,
  btnHeight = 42,
  btnWidth,
  buttonCustomStyle,
  textCustomStyle,
  textLineHeight,
  fontSize = 18,
  iconSize = 18,
  prefix,
  IconName,
  isLoading,
  suffix,
  isFullWidth = false,
  isShadow = false,
}: ButtonProps) {
  const customStyle: ViewStyle = {
    backgroundColor: disabled ? COLORS.grey : backgroundColor,
    borderColor,
    borderWidth: borderColor ? 1 : 0,
    height: btnHeight,
    width: btnWidth,
    flex: isFullWidth ? 1 : undefined,
    ...buttonCustomStyle,
  };

  const textExtraStyle = { color, fontSize };

  const hasTitle = !!title || !!i18nKey;

  return (
    <TouchableOpacity
      style={[styles.button, isShadow && getShadowStyle(), customStyle]}
      disabled={disabled || isLoading}
      activeOpacity={disabled ? 1 : 0.2}
      onPress={onPress}
    >
      {!isLoading ? (
        <View style={GLOBAL_STYLES.row}>
          {prefix && <View style={styles.prefixSpacing}>{prefix}</View>}

          {!!IconName && (
            <Icon
              name={IconName}
              size={iconSize}
              color={color}
              style={styles.smallSpaceEnd}
            />
          )}

          {hasTitle && (
            <Text
              style={[styles.text, textExtraStyle, textCustomStyle]}
              lineHeight={textLineHeight}
              i18nKey={i18nKey}
            >
              {title}
            </Text>
          )}

          {suffix && <View style={styles.suffixSpacing}>{suffix}</View>}
        </View>
      ) : (
        <ActivityIndicator color={color} size={24} />
      )}
    </TouchableOpacity>
  );
}
