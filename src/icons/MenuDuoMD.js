import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const MenuDuoMD = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Menu / Menu_Duo_MD">
      <Path
        id="Vector"
        d="M5 15H19M5 9H19"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default MenuDuoMD;
