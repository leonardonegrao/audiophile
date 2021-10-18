import React from 'react';

import { IconProps } from '../../';

export default function Menu({ size, color, alt }: IconProps) {
  return (
    <svg width={size} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>{alt}</title>
      <g id="Group">
        <rect id="Rectangle" width="16" height="3" fill={color}/>
        <rect id="Rectangle Copy" y="6" width="16" height="3" fill={color}/>
        <rect id="Rectangle Copy 2" y="12" width="16" height="3" fill={color}/>
      </g>
    </svg>
  );
}