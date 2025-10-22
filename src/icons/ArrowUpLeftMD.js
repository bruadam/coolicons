import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowUpLeftMD = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Arrow_Up_Left_MD">
      <Path
        id="Vector"
        d="M17 17L7 7M7 7V15M7 7H15"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowUpLeftMD;
