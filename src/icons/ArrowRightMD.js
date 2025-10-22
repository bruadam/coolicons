import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowRightMD = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Right_MD">
      <Path
        id="Vector"
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowRightMD;
