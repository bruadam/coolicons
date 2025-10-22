import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const CaretRightSM = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Caret_Right_SM">
      <Path
        id="Vector"
        d="M11 9L14 12L11 15"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default CaretRightSM;
