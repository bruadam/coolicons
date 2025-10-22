import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowSubDownLeft = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Arrow_Sub_Down_Left">
      <Path
        id="Vector"
        d="M11 11L6 16M6 16L11 21M6 16H13.8031C14.921 16 15.4802 16 15.9076 15.7822C16.2839 15.5905 16.5905 15.2839 16.7822 14.9076C17 14.4802 17 13.921 17 12.8031V3"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowSubDownLeft;
