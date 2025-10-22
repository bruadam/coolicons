import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SwichtLeft = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Interface / Swicht_Left">
      <G id="Vector">
        <Path
          d="M8 18H16C19.3137 18 22 15.3137 22 12C22 8.68629 19.3137 6 16 6H8C4.68629 6 2 8.68629 2 12C2 15.3137 4.68629 18 8 18Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8 9C6.34315 9 5 10.3431 5 12C5 13.6569 6.34315 15 8 15C9.65685 15 11 13.6569 11 12C11 10.3431 9.65685 9 8 9Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
  </Svg>
);
export default SwichtLeft;
