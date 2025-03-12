import Svg, { Path, SvgProps } from "react-native-svg";

function SmallArrowDown(props: SvgProps) {
  const { fill, width, height } = props;
  return (
    <Svg
      width={width || "9"}
      height={height || "5"}
      viewBox="0 0 9 5"
      fill="none"
      {...props}
    >
      <Path
        d="M4.5 5C4.71476 5 4.88957 4.92884 5.05438 4.76281L8.80022 1.12429C8.93507 1.00095 9 0.849146 9 0.664137C9 0.298861 8.69034 3.69261e-09 8.30577 8.27859e-09C8.11598 1.05418e-08 7.94118 0.0759013 7.80133 0.208729L4.50499 3.43454L1.19867 0.208729C1.06382 0.0759014 0.889012 9.67226e-08 0.694228 9.90453e-08C0.309656 1.03631e-07 3.56389e-09 0.298862 7.91975e-09 0.664137C1.00694e-08 0.844402 0.0649281 1.00095 0.199778 1.12429L3.94562 4.76281C4.11043 4.92884 4.29023 5 4.5 5Z"
        fill={fill || "white"}
      />
    </Svg>
  );
}

export default SmallArrowDown;
