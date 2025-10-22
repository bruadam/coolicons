import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ChevronRightMD = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Chevron_Right_MD">
      <Path
        id="Vector"
        d="M10 8L14 12L10 16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ChevronRightMD;
