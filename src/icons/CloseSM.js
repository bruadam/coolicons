import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const CloseSM = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Menu / Close_SM">
      <Path
        id="Vector"
        d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default CloseSM;
