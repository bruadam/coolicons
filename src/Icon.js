import * as React from 'react';
import { iconMap } from './icons';

const Icon = ({ name, size = 24, color = 'currentColor', style, ...props }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }
  return <IconComponent size={size} color={color} style={style} {...props} />;
};

export default Icon;