import { View, ViewStyle } from "react-native";
import { NavigationTabProps } from "./types";
import styles from "./styles";
import Text from "@/components/atoms/Text";

const SPACE_BETWEEN = 10.5;

export default function NavigationTab({
  focused,
  title,
  tabWidth,
  iconComponent,
}: NavigationTabProps) {
  const containerStyle: ViewStyle = {
    ...styles.container,
    marginHorizontal: SPACE_BETWEEN,
    width: tabWidth - SPACE_BETWEEN * 2,
  };

  return (
    <View style={containerStyle}>
      {iconComponent}
      <Text
        i18nKey={title}
        color={focused ? "secondary" : "light"}
        fontSize={8}
        fontFamily="font500"
      />
    </View>
  );
}
