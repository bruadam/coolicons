import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ChevronLeft = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Chevron_Left">
      <Path
        id="Vector"
        d="M15 19L8 12L15 5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ChevronLeft;
