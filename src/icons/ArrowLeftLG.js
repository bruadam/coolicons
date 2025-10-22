import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowLeftLG = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Left_LG">
      <Path
        id="Vector"
        d="M3 12L8 17M3 12L8 7M3 12H21"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowLeftLG;
