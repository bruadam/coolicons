import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ChevronDown = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Chevron_Down">
      <Path
        id="Vector"
        d="M19 9L12 16L5 9"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ChevronDown;
