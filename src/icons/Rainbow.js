import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Rainbow = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Environment / Rainbow">
      <Path
        id="Vector"
        d="M3 17V15C3 10.0294 7.02944 6 12 6C16.9706 6 21 10.0294 21 15V17M6 17V15C6 11.6863 8.68629 9 12 9C15.3137 9 18 11.6863 18 15V17M9 17V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V17"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Rainbow;
