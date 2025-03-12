import Svg, { SvgProps, Path } from "react-native-svg";

function PriceIcon(props: SvgProps) {
  const { width, height } = props;
  return (
    <Svg
      width={width || "16"}
      height={height || "19"}
      viewBox="0 0 16 19"
      fill="none"
      {...props}
    >
      <Path
        d="M15.0714 4.28981L7.34912 0L2.98546e-05 12.969L7.72233 17.2588L15.0714 4.28981Z"
        fill="white"
      />
      <Path
        d="M14.9959 6.22319L7.7135 2.17773L0.803163 14.3725L8.08559 18.4179L14.9959 6.22319Z"
        stroke="white"
        stroke-width="0.4"
        stroke-miterlimit="10"
      />
      <Path
        d="M6.89575 3.44794L7.9386 1.52881"
        stroke="#142975"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
      <Path
        d="M7.15393 15.7337L8.27477 13.791"
        stroke="#142975"
        stroke-width="0.5"
        stroke-miterlimit="10"
      />
    </Svg>
  );
}
export default PriceIcon;
