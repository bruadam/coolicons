import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Expand = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Expand">
      <Path
        id="Vector"
        d="M10 19H5V14M14 5H19V10"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Expand;
