import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ListCheck = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Edit / List_Check">
      <Path
        id="Vector"
        d="M4 17H11M20 14L16 18L14 16M4 12H15M4 7H15"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ListCheck;
