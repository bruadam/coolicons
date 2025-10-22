import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ChevronUp = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Chevron_Up">
      <Path
        id="Vector"
        d="M5 16L12 9L19 16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ChevronUp;
