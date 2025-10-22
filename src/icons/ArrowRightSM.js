import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowRightSM = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Arrow_Right_SM">
      <Path
        id="Vector"
        d="M7 12H17M17 12L13 8M17 12L13 16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowRightSM;
