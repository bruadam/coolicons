import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SortAscending = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Edit / Sort_Ascending">
      <Path
        id="Vector"
        d="M4 17H10M4 12H13M18 11V19M18 19L21 16M18 19L15 16M4 7H16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default SortAscending;
