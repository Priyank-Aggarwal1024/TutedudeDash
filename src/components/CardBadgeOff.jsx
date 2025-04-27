import "../assets/styles/CardBadgeOff.css";

function CardBadgeOff({ percent, ...props }) {
  return (
    <div className="card-off-badge" {...props}>
      <div className="card-off-badge-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          style={{ left: "1.5px", position: "relative", zIndex: "-1" }}
        >
          <path
            d="M0.851562 5.85484L5.9026 0.677734V5.85484H0.851562Z"
            fill="#1D001D"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="43"
          viewBox="0 0 37 43"
          fill="none"
          style={{ position: "relative", zIndex: 1 }}
        >
          <path
            d="M0.898438 42.0279V0.677734H33.403C35.0155 0.677734 36.3227 1.98496 36.3227 3.59752V42.0279L18.739 30.1619L0.898438 42.0279Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="0.898437"
              y1="4.42514"
              x2="44.1804"
              y2="-10.4934"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#800080" />
              <stop offset="1" stopColor="#FF864C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="card-off-badge-text">
        <span className="card-off-badge-percent">{percent}</span>
        <span className="card-off-badge-OFF">OFF</span>
      </div>
    </div>
  );
}

export default CardBadgeOff;
