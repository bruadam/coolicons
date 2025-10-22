import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowDownLeftMD = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Arrow_Down_Left_MD">
      <Path
        id="Vector"
        d="M17 7L7 17M7 17H15M7 17V9"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowDownLeftMD;
