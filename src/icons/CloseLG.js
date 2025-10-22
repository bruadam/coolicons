import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const CloseLG = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Menu / Close_LG">
      <Path
        id="Vector"
        d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default CloseLG;
