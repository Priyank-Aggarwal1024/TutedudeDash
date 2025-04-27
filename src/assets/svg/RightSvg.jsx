import React from "react";

function RightSvg({ color = "#992E9D", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      {...props}
    >
      <path
        d="M1.27344 4.86367L4.42002 8.01025L10.7132 1.26758"
        stroke={color}
        strokeWidth="1.79805"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RightSvg;
