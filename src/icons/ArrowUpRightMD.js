import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowUpRightMD = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Arrow_Up_Right_MD">
      <Path
        id="Vector"
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowUpRightMD;
