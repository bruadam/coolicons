import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const CaretLeftSM = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Caret_Left_SM">
      <Path
        id="Vector"
        d="M13 15L10 12L13 9"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default CaretLeftSM;
