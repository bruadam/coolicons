import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Heading = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Edit / Heading">
      <Path
        id="Vector"
        d="M7 5V12M7 12V19M7 12H17M17 5V12M17 12V19"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Heading;
