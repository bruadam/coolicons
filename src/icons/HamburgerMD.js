import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const HamburgerMD = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Menu / Hamburger_MD">
      <Path
        id="Vector"
        d="M5 17H19M5 12H19M5 7H19"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default HamburgerMD;
