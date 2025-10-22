import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const CaretUpSM = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Caret_Up_SM">
      <Path
        id="Vector"
        d="M9 13L12 10L15 13"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default CaretUpSM;
