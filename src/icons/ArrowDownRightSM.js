import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowDownRightSM = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Down_Right_SM">
      <Path
        id="Vector"
        d="M8 8L16 16M16 16V10M16 16H10"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowDownRightSM;
