import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Text = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Edit / Text">
      <Path
        id="Vector"
        d="M10 19H12M12 19H14M12 19V5M12 5H6V6M12 5H18V6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Text;
