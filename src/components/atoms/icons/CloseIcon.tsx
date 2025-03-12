import Svg, { Path, SvgProps } from "react-native-svg";

function CloseIcon(props: SvgProps) {
  return (
    <Svg width={21} height={19} fill="none" {...props}>
      <Path
        stroke="#142975"
        strokeLinecap="round"
        strokeWidth={4}
        d="M18.099 2 2.609 16.562M3 2l15.49 14.562"
      />
    </Svg>
  );
}
export default CloseIcon;
