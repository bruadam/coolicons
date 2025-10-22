import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowRightLG = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Arrow_Right_LG">
      <Path
        id="Vector"
        d="M21 12L16 7M21 12L16 17M21 12H3"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowRightLG;
