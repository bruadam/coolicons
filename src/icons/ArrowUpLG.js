import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowUpLG = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Up_LG">
      <Path
        id="Vector"
        d="M12 3L7 8M12 3L17 8M12 3V21"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowUpLG;
