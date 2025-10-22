import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const LinkVertical = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={style}
  >
    <G id="Interface / Link_Vertical">
      <Path
        id="Vector"
        d="M12 8V16M16 15V17C16 19.2091 14.2091 21 12 21C9.79086 21 8 19.2091 8 17V15M16 9V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V9"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default LinkVertical;
