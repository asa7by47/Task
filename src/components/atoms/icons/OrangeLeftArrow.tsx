import Svg, { Path, SvgProps } from "react-native-svg";

function OrangeLeftArrow(props: SvgProps) {
  return (
    <Svg width={14} height={24} fill="none" {...props}>
      <Path
        fill="#E84B31"
        d="M0 12c0 .573.2 1.039.664 1.478l10.188 9.99c.345.359.77.532 1.288.532 1.023 0 1.86-.826 1.86-1.851 0-.506-.213-.973-.584-1.345l-9.033-8.79 9.033-8.818c.371-.36.584-.825.584-1.345A1.856 1.856 0 0 0 12.14 0c-.504 0-.943.173-1.288.533L.664 10.522C.2 10.962 0 11.44 0 12Z"
      />
    </Svg>
  );
}
export default OrangeLeftArrow;
