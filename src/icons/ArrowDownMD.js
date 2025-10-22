import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowDownMD = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Down_MD">
      <Path
        id="Vector"
        d="M12 5V19M12 19L18 13M12 19L6 13"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowDownMD;
