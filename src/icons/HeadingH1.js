import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const HeadingH1 = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Edit / Heading_H1">
      <Path
        id="Vector"
        d="M16 10L19 9L19 19M3 5V12M3 12V19M3 12H11M11 5V12M11 12V19"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default HeadingH1;
