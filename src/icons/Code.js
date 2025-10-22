import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Code = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="System / Code">
      <Path
        id="Vector"
        d="M15 7L20 12L15 17M9 17L4 12L9 7"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Code;
