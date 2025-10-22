import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Cylinder = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="System / Cylinder">
      <Path
        id="Vector"
        d="M18 7V17C18 18.6569 15.3137 20 12 20C8.68629 20 6 18.6569 6 17V7M18 7C18 5.34315 15.3137 4 12 4C8.68629 4 6 5.34315 6 7M18 7C18 8.65685 15.3137 10 12 10C8.68629 10 6 8.65685 6 7"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Cylinder;
