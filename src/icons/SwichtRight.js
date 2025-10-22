import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SwichtRight = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Interface / Swicht_Right">
      <G id="Vector">
        <Path
          d="M8 18H16C19.3137 18 22 15.3137 22 12C22 8.68629 19.3137 6 16 6H8C4.68629 6 2 8.68629 2 12C2 15.3137 4.68629 18 8 18Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
  </Svg>
);
export default SwichtRight;
