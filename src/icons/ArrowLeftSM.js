import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowLeftSM = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Arrow_Left_SM">
      <Path
        id="Vector"
        d="M17 12H7M7 12L11 16M7 12L11 8"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowLeftSM;
