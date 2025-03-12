import Svg, { SvgProps, Path } from "react-native-svg";

function ArrowHeader(props: SvgProps) {
  const { color } = props;
  return (
    <Svg width={14} height={21} fill="none" {...props}>
      <Path
        fill={color || "#E84B31"}
        d="M0 10.53c0 .48.2.87.664 1.238l10.188 8.367c.345.301.77.446 1.288.446 1.023 0 1.86-.691 1.86-1.55 0-.424-.213-.815-.584-1.127L4.383 10.54l9.033-7.385c.371-.301.584-.692.584-1.127 0-.859-.837-1.55-1.86-1.55-.504 0-.943.145-1.288.446L.664 9.292C.2 9.66 0 10.062 0 10.53Z"
      />
    </Svg>
  );
}

export default ArrowHeader;
