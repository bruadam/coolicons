import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Rewind = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Media / Rewind">
      <Path
        id="Vector"
        d="M12 12L21 17V7L12 12ZM12 12V7L3 12L12 17V12Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Rewind;
