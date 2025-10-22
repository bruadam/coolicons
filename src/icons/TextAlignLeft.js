import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const TextAlignLeft = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Edit / Text_Align_Left">
      <Path
        id="Vector"
        d="M4 18H14M4 14H20M4 10H14M4 6H20"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default TextAlignLeft;
