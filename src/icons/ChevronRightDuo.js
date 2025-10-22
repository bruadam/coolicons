import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ChevronRightDuo = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Chevron_Right_Duo">
      <Path
        id="Vector"
        d="M13 8L17 12L13 16M7 8L11 12L7 16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ChevronRightDuo;
