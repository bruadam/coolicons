import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const CaretDownMD = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Caret_Down_MD">
      <Path
        id="Vector"
        d="M16 10L12 14L8 10"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default CaretDownMD;
