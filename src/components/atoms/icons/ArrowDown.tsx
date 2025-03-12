import Svg, { Path, SvgProps } from "react-native-svg";

function ArrowDown(props: SvgProps) {
  const { fill, width, height } = props;
  return (
    <Svg width={width || 18} height={height || 10} fill="none" {...props}>
      <Path
        fill={fill || "#BBB6B6"}
        d="M8.662 9.97c.342 0 .635-.126.889-.4l7.441-7.597c.215-.215.332-.489.332-.81C17.324.517 16.816 0 16.162 0c-.322 0-.605.137-.83.352l-6.67 6.845L1.992.352A1.21 1.21 0 0 0 1.162 0C.508 0 0 .518 0 1.162c0 .322.117.596.332.81L7.764 9.57c.263.274.556.4.898.4Z"
      />
    </Svg>
  );
}

export default ArrowDown;
