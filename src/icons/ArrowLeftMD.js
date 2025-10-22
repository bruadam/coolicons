import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowLeftMD = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Left_MD">
      <Path
        id="Vector"
        d="M19 12H5M5 12L11 18M5 12L11 6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowLeftMD;
