import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ChevronLeftDuo = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Chevron_Left_Duo">
      <Path
        id="Vector"
        d="M17 16L13 12L17 8M11 16L7 12L11 8"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ChevronLeftDuo;
