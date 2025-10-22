import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const LinkHorizontalOff = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Interface / Link_Horizontal_Off">
      <Path
        id="Vector"
        d="M8 12H12M12 12L8 8M12 12L20 20M15 8H17C19.2091 8 21 9.79086 21 12C21 13.1947 20.4759 14.2671 19.6455 15M9 16H7C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8H8M8 8L4 4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default LinkHorizontalOff;
