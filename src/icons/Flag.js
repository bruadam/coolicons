import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Flag = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Navigation / Flag">
      <Path
        id="Vector"
        d="M4 21V15.6871M4 15.6871C9.81818 11.1377 14.1818 20.2363 20 15.6869V4.31347C14.1818 8.86284 9.81818 -0.236103 4 4.31327V15.6871Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Flag;
