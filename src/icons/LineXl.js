import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const LineXl = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Interface / Line_Xl">
      <Path
        id="Vector"
        d="M12 21V3"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default LineXl;
