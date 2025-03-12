import Svg, { Path, SvgProps } from "react-native-svg";

function SmallWhiteRightArrow(props: SvgProps) {
  return (
    <Svg width={6} height={9} fill="none" {...props}>
      <Path
        fill="#fff"
        d="M6 4.5c0-.215-.085-.39-.285-.554L1.35.2A.784.784 0 0 0 .797 0C.359 0 0 .31 0 .694c0 .19.091.365.25.505l3.871 3.296-3.87 3.306A.656.656 0 0 0 0 8.306C0 8.69.359 9 .797 9a.794.794 0 0 0 .552-.2l4.366-3.746C5.915 4.89 6 4.71 6 4.5Z"
      />
    </Svg>
  );
}
export default SmallWhiteRightArrow;
