import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const AddPlus = (props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Edit / Add_Plus">
      <Path
        id="Vector"
        d="M6 12H12M12 12H18M12 12V18M12 12V6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default AddPlus;
