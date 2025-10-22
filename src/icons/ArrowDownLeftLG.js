import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowDownLeftLG = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Down_Left_LG">
      <Path
        id="Vector"
        d="M5.63574 18.3638L12.7068 18.3638M5.63574 18.3638V11.2925M5.63574 18.3638L18.3637 5.63574"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowDownLeftLG;
