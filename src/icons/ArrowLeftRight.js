import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowLeftRight = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Left_Right">
      <Path
        id="Vector"
        d="M16 13L19 16M19 16L16 19M19 16H5M8 11L5 8M5 8L8 5M5 8H19"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowLeftRight;
