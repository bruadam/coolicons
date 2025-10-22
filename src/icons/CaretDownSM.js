import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const CaretDownSM = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Caret_Down_SM">
      <Path
        id="Vector"
        d="M15 11L12 14L9 11"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default CaretDownSM;
