import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowDownRightMD = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Arrow_Down_Right_MD">
      <Path
        id="Vector"
        d="M7 7L17 17M17 17V9M17 17H9"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowDownRightMD;
