import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const ArrowSubLeftUp = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Arrow / Arrow_Sub_Left_Up">
      <Path
        id="Vector"
        d="M12.5 11.5L7.5 6.5M7.5 6.5L2.5 11.5M7.5 6.5V14.3C7.5 15.4201 7.5 15.9798 7.71799 16.4076C7.90973 16.7839 8.21547 17.0905 8.5918 17.2822C9.0192 17.5 9.57899 17.5 10.6969 17.5H20.5002"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowSubLeftUp;
