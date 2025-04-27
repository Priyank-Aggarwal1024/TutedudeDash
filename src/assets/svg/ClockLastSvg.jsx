import React from "react";

const ClockLastSvg = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      {...props}
    >
      <path
        d="M1.83073 8.50065C1.83073 12.1825 4.8155 15.1673 8.4974 15.1673C12.1793 15.1673 15.1641 12.1825 15.1641 8.50065C15.1641 4.81875 12.1793 1.83398 8.4974 1.83398"
        stroke="#83848D"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M8.5 6.5V9.16667H11.1667"
        stroke="#83848D"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="8.5026"
        cy="8.50065"
        r="6.66667"
        stroke="#83848D"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeDasharray="0.5 3.5"
      />
    </svg>
  );
};

export default ClockLastSvg;
