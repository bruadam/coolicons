import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const HamburgerLG = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Menu / Hamburger_LG">
      <Path
        id="Vector"
        d="M3 17H21M3 12H21M3 7H21"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default HamburgerLG;
