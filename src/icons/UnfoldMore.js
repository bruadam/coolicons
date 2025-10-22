import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const UnfoldMore = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Unfold_More">
      <Path
        id="Vector"
        d="M16 15L12 19L8 15M8 9L12 5L16 9"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default UnfoldMore;
