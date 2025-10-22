import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowUpSM = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Arrow_Up_SM">
      <Path
        id="Vector"
        d="M12 17V7M12 7L8 11M12 7L16 11"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowUpSM;
