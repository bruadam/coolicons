import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ChevronRight = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Chevron_Right">
      <Path
        id="Vector"
        d="M9 5L16 12L9 19"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ChevronRight;
