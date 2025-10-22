import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Underline = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Edit / Underline">
      <Path
        id="Vector"
        d="M6 19H18M8 5V11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11V5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Underline;
