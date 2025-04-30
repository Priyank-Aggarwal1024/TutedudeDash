import React from "react";

const CrossSvg = ({ color = "#800080", strokeWidth = 3, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    {...props}
  >
    <line
      x1="7"
      y1="7"
      x2="22"
      y2="22"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <line
      x1="22"
      y1="7"
      x2="7"
      y2="22"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

export default CrossSvg;
