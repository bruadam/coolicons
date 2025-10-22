import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const CheckBig = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Interface / Check_Big">
      <Path
        id="Vector"
        d="M4 12L8.94975 16.9497L19.5572 6.34326"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default CheckBig;
