import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowSubUpRight = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Sub_Up_Right">
      <Path
        id="Vector"
        d="M13 13L18 8M18 8L13 3M18 8H10.2002C9.08009 8 8.51962 8 8.0918 8.21799C7.71547 8.40973 7.40973 8.71547 7.21799 9.0918C7 9.51962 7 10.0801 7 11.2002V21.0002"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowSubUpRight;
