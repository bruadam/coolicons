import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SortDescending = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Edit / Sort_Descending">
      <Path
        id="Vector"
        d="M4 17H16M4 12H13M4 7H10M18 13V5M18 5L21 8M18 5L15 8"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default SortDescending;
