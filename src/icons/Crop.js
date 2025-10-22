import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Crop = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Edit / Crop">
      <Path
        id="Vector"
        d="M18 21V18M18 18H9.19691C8.07899 18 7.5192 18 7.0918 17.7822C6.71547 17.5905 6.40973 17.2839 6.21799 16.9076C6 16.4798 6 15.9201 6 14.8V6M18 18H21.0002M6 6H3M6 6V3M10 6H14.8C15.9201 6 16.4798 6 16.9076 6.21799C17.2839 6.40973 17.5905 6.71547 17.7822 7.0918C18 7.5192 18 8.07899 18 9.19691V14.0002"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Crop;
