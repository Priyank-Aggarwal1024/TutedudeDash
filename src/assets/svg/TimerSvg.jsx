import React from "react";

function TimerSvg({ color = "#666666", width = 15, height = 15 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        d="M3.875 1.60156H10.9142V5.12119L8.56783 7.4676L10.9142 9.81402V13.3336H3.875V9.81402L6.22141 7.4676L3.875 5.12119V1.60156ZM9.74104 10.1073L7.39462 7.7609L5.04821 10.1073V12.1604H9.74104V10.1073ZM7.39462 7.1743L9.74104 4.82788V2.77477H5.04821V4.82788L7.39462 7.1743ZM6.22141 3.94798H8.56783V4.38793L7.39462 5.56114L6.22141 4.38793V3.94798Z"
        fill={color}
      />
    </svg>
  );
}

export default TimerSvg;
