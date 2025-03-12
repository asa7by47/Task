import Svg, { Path, SvgProps } from "react-native-svg";

function SuccessCheckmark(props: SvgProps) {
  return (
    <Svg width={108} height={108} fill="none" {...props}>
      <Path
        fill="#E84B31"
        d="M92.182 92.182c21.091-21.091 21.091-55.273 0-76.364-21.091-21.09-55.273-21.09-76.364 0-21.09 21.091-21.09 55.273 0 76.364 21.091 21.091 55.295 21.091 76.364 0ZM34.639 45.747 46.782 57.89l26.6-26.579 9.411 9.41-26.578 26.58-9.433 9.41-9.41-9.41-12.143-12.144 9.41-9.41Z"
      />
    </Svg>
  );
}
export default SuccessCheckmark;
