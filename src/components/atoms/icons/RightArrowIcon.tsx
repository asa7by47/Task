import Svg, { SvgProps, Path, Circle } from "react-native-svg";

function RightArrowIcon(props: SvgProps) {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <Circle cx="8" cy="8" r="8" fill="#E9E9E9" />
      <Path
        d="M12 7.53192C12 7.31563 11.9146 7.13959 11.7154 6.9736L7.34915 3.20119C7.20114 3.06539 7.01898 3 6.79696 3C6.35863 3 6 3.31185 6 3.69915C6 3.89029 6.09108 4.06633 6.25047 4.20717L10.1214 7.52689L6.25047 10.8567C6.09108 10.9925 6 11.1685 6 11.3647C6 11.752 6.35863 12.0638 6.79696 12.0638C7.01328 12.0638 7.20114 11.9984 7.34915 11.8626L11.7154 8.09023C11.9146 7.92425 12 7.74317 12 7.53192Z"
        fill="#142975"
      />
    </Svg>
  );
}

export default RightArrowIcon;
