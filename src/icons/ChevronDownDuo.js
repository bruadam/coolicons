import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ChevronDownDuo = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Chevron_Down_Duo">
      <Path
        id="Vector"
        d="M16 13L12 17L8 13M16 7L12 11L8 7"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ChevronDownDuo;
