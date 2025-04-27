import React, { useState } from "react";

const SwiperNextSvg = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const pinkColor = "#B73BBE";
  const purpleColor = "#992E9D";
  const whiteColor = "#FFFFFF";

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      {...props}
    >
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        rx="11.5"
        stroke={isHovered ? pinkColor : purpleColor}
        fill={isHovered ? pinkColor : "transparent"}
        strokeWidth="1"
        style={{ transition: "all 0.3s ease" }}
      />
      <path
        d="M10.3971 8.07817L13.7578 11.999L10.3971 15.9199"
        stroke={isHovered ? whiteColor : purpleColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.3s ease" }}
      />
    </svg>
  );
};

export default SwiperNextSvg;
