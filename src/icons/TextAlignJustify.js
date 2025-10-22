import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const TextAlignJustify = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Edit / Text_Align_Justify">
      <Path
        id="Vector"
        d="M20 18H4M20 14H4M20 10H4M20 6H4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default TextAlignJustify;
