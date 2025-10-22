import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Shuffle = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Media / Shuffle">
      <Path
        id="Vector"
        d="M18 20L21 17M21 17L18 14M21 17H17C14.2386 17 12 14.7614 12 12C12 9.23858 9.76142 7 7 7H3M18 4L21 7M21 7L18 10M21 7L17 7C15.8744 7 14.8357 7.37194 14 7.99963M3 17H7C8.12561 17 9.16434 16.6277 10 16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Shuffle;
