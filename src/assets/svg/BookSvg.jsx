import * as React from "react";

const BookSvg = ({
  startColor = "#B73BBE",
  endColor = "#992E9D",
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <linearGradient
        id="bookGradient"
        x1="12"
        x2="12"
        y1="3.016"
        y2="19.263"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={startColor}></stop>
        <stop offset="1" stopColor={endColor}></stop>
      </linearGradient>
    </defs>
    <path
      fill="url(#bookGradient)"
      fillRule="evenodd"
      d="M2 16.143V4.997c0-1.098.886-1.99 1.982-1.923.977.06 2.131.179 3.018.412 1.05.277 2.296.867 3.282 1.388.307.163.634.276.968.339v15.179a3.4 3.4 0 0 1-.878-.324c-1-.533-2.29-1.15-3.372-1.436-.877-.231-2.016-.35-2.985-.41C2.906 18.152 2 17.254 2 16.142M5.182 8.27a.75.75 0 1 0-.364 1.456l4 1a.75.75 0 1 0 .364-1.456zm0 4a.75.75 0 0 0-.364 1.456l4 1a.75.75 0 1 0 .364-1.456z"
      clipRule="evenodd"
    />
    <path
      fill="url(#bookGradient)"
      fillRule="evenodd"
      d="M12.75 20.392q.456-.1.878-.324c1-.533 2.29-1.15 3.372-1.436.877-.231 2.016-.35 2.985-.41 1.109-.07 2.015-.968 2.015-2.08V4.933c0-1.072-.846-1.953-1.918-1.915-1.129.04-2.535.156-3.582.47-.908.271-1.965.816-2.826 1.315a3.5 3.5 0 0 1-.924.37zm6.432-10.665a.75.75 0 0 0-.364-1.456l-4 1a.75.75 0 1 0 .364 1.456zm0 4a.75.75 0 0 0-.364-1.456l-4 1a.75.75 0 1 0 .364 1.456z"
      clipRule="evenodd"
    />
  </svg>
);

export default BookSvg;
