import Svg, { Path, SvgProps } from "react-native-svg";

function PlusIcon(props: SvgProps) {
  return (
    <Svg width="18" height="17" viewBox="0 0 18 17" fill="none" {...props}>
      <Path
        d="M0.964688 6.77H7.08469V0.649999H10.9247V6.77H17.0147V10.61H10.9247V16.73H7.08469V10.61H0.964688V6.77Z"
        fill="#F1F1F1"
      />
    </Svg>
  );
}

export default PlusIcon;
