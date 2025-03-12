import Svg, { Circle, Path, SvgProps } from "react-native-svg";

function ClockIcon(props: SvgProps) {
  const { fill, color } = props;
  return (
    <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" {...props}>
      <Circle cx="3.6002" cy="3.6002" r="3.6002" fill={fill || "white"} />
      <Path
        d="M3.6001 1.08635V2.69984V3.59989H4.68771H5.77627"
        stroke={color || "#142975"}
        stroke-width="0.5"
      />
    </Svg>
  );
}

export default ClockIcon;
