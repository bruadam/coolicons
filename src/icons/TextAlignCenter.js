import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const TextAlignCenter = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Edit / Text_Align_Center">
      <Path
        id="Vector"
        d="M17 18H7M20 14H4M17 10H7M20 6H4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default TextAlignCenter;
