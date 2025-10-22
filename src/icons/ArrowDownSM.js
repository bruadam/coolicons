import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowDownSM = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Arrow / Arrow_Down_SM">
      <Path
        id="Vector"
        d="M12 7V17M12 17L16 13M12 17L8 13"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowDownSM;
