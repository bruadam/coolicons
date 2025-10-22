import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowUndoDownRight = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Undo_Down_Right">
      <Path
        id="Vector"
        d="M17 11L21 15M21 15L17 19M21 15H8C5.23858 15 3 12.7614 3 10C3 7.23858 5.23858 5 8 5H13"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowUndoDownRight;
