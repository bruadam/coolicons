import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const CloseMD = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Menu / Close_MD">
      <Path
        id="Vector"
        d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default CloseMD;
