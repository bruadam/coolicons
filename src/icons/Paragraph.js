import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Paragraph = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Edit / Paragraph">
      <Path
        id="Vector"
        d="M12 5V13M12 5H16M12 5H11C8.79086 5 7 6.79086 7 9C7 11.2091 8.79086 13 11 13H12M12 13V19M16 5V19M16 5H17"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Paragraph;
