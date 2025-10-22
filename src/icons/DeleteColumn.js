import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const DeleteColumn = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Edit / Delete_Column">
      <Path
        id="Vector"
        d="M10 21H9C7.89543 21 7 20.1046 7 19V5C7 3.89543 7.89543 3 9 3H11C12.1046 3 13 3.89543 13 5V11M19 16H13"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default DeleteColumn;
