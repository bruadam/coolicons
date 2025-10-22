import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const CircleWarning = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Warning / Circle_Warning">
      <Path
        id="Vector"
        d="M12 8.4502V12.4502M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12.0498 15.4502V15.5502L11.9502 15.5498V15.4502H12.0498Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default CircleWarning;
