import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ListRemove = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Edit / List_Remove">
      <Path
        id="Vector"
        d="M3 17H10M15 16H21M3 12H14M3 7H14"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ListRemove;
