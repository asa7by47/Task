import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from "react-native-svg";

function SpotsIcon(props: SvgProps) {
  const { fill } = props;
  return (
    <Svg width="9" height="8" viewBox="0 0 9 8" fill="none" {...props}>
      <G clip-path="url(#clip0_2031_8127)">
        <Path
          d="M4.46018 2.61438C5.22263 2.61438 5.84071 2.02913 5.84071 1.30719C5.84071 0.585249 5.22263 0 4.46018 0C3.69774 0 3.07965 0.585249 3.07965 1.30719C3.07965 2.02913 3.69774 2.61438 4.46018 2.61438Z"
          fill={fill || "white"}
        />
        <Path
          d="M1.46018 4.70593C2.22263 4.70593 2.84071 4.12068 2.84071 3.39874C2.84071 2.6768 2.22263 2.09155 1.46018 2.09155C0.697736 2.09155 0.0796509 2.6768 0.0796509 3.39874C0.0796509 4.12068 0.697736 4.70593 1.46018 4.70593Z"
          fill={fill || "white"}
        />
        <Path
          d="M7.46018 4.70593C8.22263 4.70593 8.84071 4.12068 8.84071 3.39874C8.84071 2.6768 8.22263 2.09155 7.46018 2.09155C6.69774 2.09155 6.07965 2.6768 6.07965 3.39874C6.07965 4.12068 6.69774 4.70593 7.46018 4.70593Z"
          fill={fill || "white"}
        />
        <Path
          d="M0 8.00003V6.22225C0 5.49022 0.504425 4.88892 1.11504 4.88892H2.20354C2.81416 4.88892 3.31858 5.49022 3.31858 6.22225V8.00003"
          fill={fill || "white"}
        />
        <Path
          d="M5.6814 8.00003V6.22225C5.6814 5.49022 6.18582 4.88892 6.79644 4.88892H7.88494C8.49556 4.88892 8.99998 5.49022 8.99998 6.22225V8.00003"
          fill={fill || "white"}
        />
        <Path
          d="M2.8407 6.09156V4.23535C2.8407 3.47718 3.34512 2.84973 3.95574 2.84973H5.04424C5.65486 2.84973 6.15928 3.47718 6.15928 4.23535V6.09156"
          fill={fill || "white"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2031_8127">
          <Rect width="9" height="8" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SpotsIcon;
