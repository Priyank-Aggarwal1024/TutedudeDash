// DownloadSvg.jsx
const DownloadSvg = ({ color = "#FFFFFF", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    {...props}
  >
    <path
      d="M3.54688 14.1667H13.4635V12.75H3.54688V14.1667ZM13.4635 6.375H10.6302V2.125H6.38021V6.375H3.54688L8.50521 11.3333L13.4635 6.375Z"
      fill={color}
    />
  </svg>
);

export default DownloadSvg;
