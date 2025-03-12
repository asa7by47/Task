import Svg, { SvgProps, Path, Rect } from "react-native-svg";
import COLORS from "@/constants/Colors";

interface HomeIconProps extends SvgProps {
  isFocused?: boolean;
}

function HomeIcon(props: HomeIconProps) {
  const isFocused = props?.isFocused;
  return (
    <Svg width={30} height={23} fill="none" {...props}>
      <Rect
        width={18}
        height={13}
        x={6}
        y={8.4}
        fill={isFocused ? COLORS.secondary : COLORS.light}
        rx={1}
      />
      <Rect width={8} height={8} x={11} y={14.4} fill="#142975" rx={1} />
      <Path
        fill={isFocused ? COLORS.secondary : COLORS.light}
        d="M14.371.908a1 1 0 0 1 1.258 0L25.79 9.123c.733.592.314 1.777-.629 1.777H4.838c-.943 0-1.362-1.185-.629-1.777L14.371.908Z"
      />
    </Svg>
  );
}

export default HomeIcon;
