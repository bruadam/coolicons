import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const UnfoldLess = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Unfold_Less">
      <Path
        id="Vector"
        d="M8 19L12 15L16 19M16 5L12 9L8 5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default UnfoldLess;
