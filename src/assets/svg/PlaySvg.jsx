// PlaySvg.jsx
const PlaySvg = ({ color = "#FFFFFF", width = 20, height = 21, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 21"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.9974 18.8327C14.5998 18.8327 18.3307 15.1017 18.3307 10.4993C18.3307 5.89698 14.5998 2.16602 9.9974 2.16602C5.39502 2.16602 1.66406 5.89698 1.66406 10.4993C1.66406 15.1017 5.39502 18.8327 9.9974 18.8327ZM8.90864 13.7042L12.8421 11.3818C13.4936 10.9972 13.4936 10.0015 12.8421 9.61688L8.90864 7.29451C8.27549 6.92069 7.4974 7.40724 7.4974 8.17698V12.8217C7.4974 13.5915 8.27549 14.078 8.90864 13.7042Z"
      fill={color}
    />
  </svg>
);

export default PlaySvg;
