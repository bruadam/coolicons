import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const FirstAid = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Environment / First_Aid">
      <Path
        id="Vector"
        d="M9 20C9 20.5523 9.44772 21 10 21H14C14.5523 21 15 20.5523 15 20V15L20 15C20.5523 15 21 14.5523 21 14V10C21 9.44772 20.5523 9 20 9H15L15 4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V9H4C3.44772 9 3 9.44772 3 10V14C3 14.5523 3.44772 15 4 15H9V20Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default FirstAid;
