import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowUpLeftSM = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Up_Left_SM">
      <Path
        id="Vector"
        d="M16 16L8 8M8 8V14M8 8H14"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowUpLeftSM;
