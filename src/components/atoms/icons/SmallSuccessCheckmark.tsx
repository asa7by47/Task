import Svg, { Path, SvgProps } from "react-native-svg";

function SmallSuccessCheckmark(props: SvgProps) {
  return (
    <Svg width={46} height={46} fill="none" {...props}>
      <Path
        fill="#E84B31"
        d="M39.263 39.263c8.983-8.983 8.983-23.542 0-32.526-8.983-8.983-23.542-8.983-32.526 0-8.983 8.983-8.983 23.543 0 32.526 8.983 8.983 23.552 8.983 32.526 0Zm-24.51-19.778 5.173 5.172 11.33-11.32 4.008 4.008-11.32 11.32-4.018 4.008-4.008-4.008-5.172-5.172 4.008-4.008Z"
      />
    </Svg>
  );
}
export default SmallSuccessCheckmark;
