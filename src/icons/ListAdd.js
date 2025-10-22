import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ListAdd = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Edit / List_Add">
      <Path
        id="Vector"
        d="M3 17H10M15 16H18M18 16H21M18 16V19M18 16V13M3 12H14M3 7H14"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ListAdd;
