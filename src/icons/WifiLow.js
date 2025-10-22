import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const WifiLow = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="System / Wifi_Low">
      <Path
        id="Vector"
        d="M8.34277 14.5898C8.80861 14.0903 9.37187 13.6915 9.9978 13.418C10.6237 13.1445 11.2995 13.0024 11.9826 13C12.6656 12.9976 13.3418 13.1353 13.9697 13.4044C14.5975 13.6735 15.1637 14.0683 15.633 14.5645M12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default WifiLow;
