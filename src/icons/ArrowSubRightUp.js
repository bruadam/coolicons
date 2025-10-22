import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowSubRightUp = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Sub_Right_Up">
      <Path
        id="Vector"
        d="M11 11L16 6M16 6L21 11M16 6V13.8031C16 14.921 16 15.4802 15.7822 15.9076C15.5905 16.2839 15.2839 16.5905 14.9076 16.7822C14.4802 17 13.921 17 12.8031 17H3"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowSubRightUp;
