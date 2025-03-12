import Svg, { Circle, Path, SvgProps } from "react-native-svg";

function Timer(props: SvgProps) {
  return (
    <Svg width={8} height={8} fill="none" {...props}>
      <Circle cx={3.6} cy={3.6} r={3.6} fill="#fff" />
      <Path stroke="#142975" strokeWidth={0.5} d="M3.6 1.086V3.6h2.176" />
    </Svg>
  );
}
export default Timer;
