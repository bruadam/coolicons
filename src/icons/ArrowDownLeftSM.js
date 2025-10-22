import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowDownLeftSM = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Down_Left_SM">
      <Path
        id="Vector"
        d="M16 8L8 16M8 16H14M8 16V10"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowDownLeftSM;
