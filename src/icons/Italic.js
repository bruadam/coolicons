import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Italic = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Edit / Italic">
      <Path
        id="Vector"
        d="M8 19H10M10 19H12M10 19L14 5M12 5H14M14 5H16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Italic;
