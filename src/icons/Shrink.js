import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Shrink = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Shrink">
      <Path
        id="Vector"
        d="M5 14H10V19M19 10H14V5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Shrink;
