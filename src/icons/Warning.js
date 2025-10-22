import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Warning = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Warning / Warning">
      <Path
        id="Vector"
        d="M12 6V14M12.0498 18V18.1L11.9502 18.1002V18H12.0498Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Warning;
