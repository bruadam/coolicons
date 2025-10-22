import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowUndoUpRight = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Undo_Up_Right">
      <Path
        id="Vector"
        d="M17 13L21 9M21 9L17 5M21 9H8C5.23858 9 3 11.2386 3 14C3 16.7614 5.23858 19 8 19H13"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowUndoUpRight;
