import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Download = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Interface / Download">
      <Path
        id="Vector"
        d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Download;
