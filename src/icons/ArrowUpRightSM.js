import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowUpRightSM = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Arrow_Up_Right_SM">
      <Path
        id="Vector"
        d="M8 16L16 8M16 8H10M16 8V14"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowUpRightSM;
