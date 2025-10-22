import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const MenuAlt01 = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Menu / Menu_Alt_01">
      <Path
        id="Vector"
        d="M12 17H19M5 12H19M5 7H19"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default MenuAlt01;
