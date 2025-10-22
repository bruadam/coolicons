import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Navigation = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Navigation / Navigation">
      <Path
        id="Vector"
        d="M4.80518 3.55545L20.6143 8.4198C21.4766 8.68511 21.5746 9.86635 20.7677 10.2698L14.0673 13.6199C13.8738 13.7167 13.7168 13.8736 13.62 14.0672L10.27 20.7671C9.86658 21.5741 8.68555 21.4762 8.42024 20.614L3.55544 4.80486C3.31935 4.03759 4.0379 3.31937 4.80518 3.55545Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Navigation;
