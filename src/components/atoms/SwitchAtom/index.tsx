import { View } from "react-native";
import { Switch } from "react-native-switch";
import COLORS from "@/constants/Colors";
import { SwitchAtomProps } from "./types";

function SwitchAtom({
  value,
  onValueChange,
  disabled = false,
  customStyle,
}: SwitchAtomProps) {
  return (
    <View style={customStyle}>
      <Switch
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        circleSize={18}
        barHeight={24}
        circleBorderWidth={0}
        backgroundActive={COLORS.primary}
        backgroundInactive={COLORS.secondary}
        renderActiveText={false}
        renderInActiveText={false}
        switchLeftPx={1.6} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
        switchRightPx={1.6} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
        switchWidthMultiplier={2.5} // multiplied by the `circleSize` prop to calculate total width of the Switch
        switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
      />
    </View>
  );
}
export default SwitchAtom;
