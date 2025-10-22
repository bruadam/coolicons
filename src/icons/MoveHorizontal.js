import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const MoveHorizontal = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Edit / Move_Horizontal">
      <Path
        id="Vector"
        d="M3 12H21M3 12L6 15M3 12L6 9M21 12L18 9M21 12L18 15"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default MoveHorizontal;
