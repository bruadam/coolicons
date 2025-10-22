import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ChevronUpDuo = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Chevron_Up_Duo">
      <Path
        id="Vector"
        d="M8 17L12 13L16 17M8 11L12 7L16 11"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ChevronUpDuo;
