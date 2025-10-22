import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const MoveVertical = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Edit / Move_Vertical">
      <Path
        id="Vector"
        d="M12 21V3M12 21L15 18M12 21L9 18M12 3L9 6M12 3L15 6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default MoveVertical;
