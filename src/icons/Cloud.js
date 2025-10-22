import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const Cloud = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="File / Cloud">
      <Path
        id="Vector"
        d="M19 11C21.2091 11 23 12.7909 23 15C23 17.2091 21.2091 19 19 19L6 19.0001C3.23858 19.0001 1 16.7613 1 13.9999C1 11.3498 3.06206 9.18144 5.66895 9.01082C6.79019 6.64004 9.20335 5 12 5C15.5267 5 18.4447 7.60802 18.9297 11.0006C18.9532 11.0002 18.9764 11 19 11Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default Cloud;
