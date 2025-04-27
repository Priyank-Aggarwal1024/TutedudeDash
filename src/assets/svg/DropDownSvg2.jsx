import React from "react";

function DropDownSvg2({ color = "#0F110D", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      {...props}
    >
      <path
        d="M1.002 1.31894L4.92287 4.67969L8.84375 1.31894"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DropDownSvg2;
