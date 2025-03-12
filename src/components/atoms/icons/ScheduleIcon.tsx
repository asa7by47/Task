import Svg, { Rect, Circle, Path, SvgProps } from "react-native-svg";
import COLORS from "@/constants/Colors";

interface scheduleIconIconProps extends SvgProps {
  isFocused?: boolean;
}

function ScheduleIcon(props: scheduleIconIconProps) {
  const isFocused = props?.isFocused;
  return (
    <Svg width={21} height={23} fill="none" {...props}>
      <Rect
        width={18.2}
        height={16.8}
        y={2.8}
        fill={isFocused ? COLORS.secondary : COLORS.light}
        rx={1}
      />
      <Circle
        cx={15.4}
        cy={16.8}
        r={5.3}
        fill={isFocused ? COLORS.secondary : COLORS.light}
        stroke="#142975"
        strokeWidth={0.6}
      />
      <Path stroke="#142975" strokeWidth={0.6} d="M15.4 14v2.8h2.8" />
      <Path
        fill={isFocused ? COLORS.secondary : COLORS.light}
        stroke="#142975"
        strokeWidth={0.4}
        d="M3.436 5.4H2.164c-.117 0-.258-.069-.376-.202a.718.718 0 0 1-.188-.46V.891c.06-.19.142-.37.243-.498C1.95.259 2.057.2 2.163.2h1.273c.117 0 .258.069.376.202A.718.718 0 0 1 4 .862v4.02c0 .069-.055.2-.18.325-.122.122-.265.193-.384.193ZM15.948 5.4H14.73c-.105 0-.236-.065-.35-.199a.74.74 0 0 1-.18-.463V.89c.057-.192.136-.366.242-.491a.513.513 0 0 1 .41-.199h1.218c.105 0 .236.065.35.199a.74.74 0 0 1 .18.463V4.84a1.31 1.31 0 0 1-.234.37.558.558 0 0 1-.418.189Z"
      />
      <Path
        stroke={isFocused ? COLORS.secondary : COLORS.light}
        d="M0 7.9h18.2"
      />
    </Svg>
  );
}

export default ScheduleIcon;
