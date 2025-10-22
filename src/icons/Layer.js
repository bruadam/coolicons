import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Layer = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Edit / Layer">
      <Path
        id="Vector"
        d="M21 14L12 20L3 14M21 10L12 16L3 10L12 4L21 10Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Layer;
