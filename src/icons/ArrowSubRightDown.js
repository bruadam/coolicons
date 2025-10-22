import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowSubRightDown = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Sub_Right_Down">
      <Path
        id="Vector"
        d="M11 13L16 18M16 18L21 13M16 18V10.1969C16 9.07899 16 8.5192 15.7822 8.0918C15.5905 7.71547 15.2839 7.40973 14.9076 7.21799C14.4798 7 13.9201 7 12.8 7H3"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowSubRightDown;
