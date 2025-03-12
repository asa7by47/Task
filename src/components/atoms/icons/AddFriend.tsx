import Svg, {
  Path,
  Defs,
  Pattern,
  Use,
  Image,
  SvgProps,
} from "react-native-svg";

function AddFriend(props: SvgProps) {
  return (
    <Svg width={26} height={26} fill="none" {...props}>
      <Path fill="url(#a)" d="M.174.565h25.044v25.044H.174z" />
      <Defs>
        <Pattern
          id="a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use xlinkHref="#b" transform="scale(.00781)" />
        </Pattern>
        <Image
          xlinkHref="data:image/png;base64,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"
          id="b"
          width={128}
          height={128}
        />
      </Defs>
    </Svg>
  );
}
export default AddFriend;
