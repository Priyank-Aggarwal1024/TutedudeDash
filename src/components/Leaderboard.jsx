import { useState } from "react";
import "../assets/styles/Leaderboard.css";
import { bronzeCup, clock, goldCup, silverCup } from "@/assets";

const data = [
  { name: "Khushi", hours: 64, rank: 1 },
  { name: "Mafia Boyz", hours: 34, rank: 2 },
  { name: "Mafia Boyz", hours: 24, rank: 3 },
  { name: "Mafia Boyz", hours: 4, rank: 4 },
  { name: "Mafia Boyz", hours: 4, rank: 5 },
  { name: "Mafia Boyz", hours: 4, rank: 6 },
  { name: "Mafia Boyz", hours: 4, rank: 7 },
];

const yourRank = { name: "Mafia Boyz", hours: 10, rank: 10 };

const Leaderboard = ({ className = "" }) => {
  const [tab, setTab] = useState("overall");
  const getMedal = (rank) => {
    if (rank == 1) {
      return goldCup;
    } else if (rank == 2) {
      return silverCup;
    } else if (rank == 3) {
      return bronzeCup;
    }
    return;
  };
  return (
    <div className={`lb-container ${className}`}>
      <div className="lb-header">
        <h2 className="lb-title">Leaderboard</h2>
        <div className="lb-tabs">
          <button
            className={`lb-tab ${tab == "weekly" ? "lb-tab-weekly" : ""}`}
            onClick={() => setTab("weekly")}
          >
            Weekly
          </button>
          <button
            className={`lb-tab ${tab == "overall" ? "lb-tab-overall" : ""}`}
            onClick={() => setTab("overall")}
          >
            Overall
          </button>
        </div>
      </div>
      <div className="lb-list-outer">
        <div className="lb-list">
          {data.map((item, index) => (
            <div key={index} className="lb-item">
              <div className="lb-left">
                {item.rank <= 3 ? (
                  <img
                    src={getMedal(item.rank)}
                    alt="Trophy"
                    className="lb-trophy"
                  />
                ) : (
                  <span className="lb-rank">#{item.rank}</span>
                )}
                <span
                  className={`lb-name ${
                    item.rank === 1
                      ? "lb-name-gold"
                      : item.rank == 2
                      ? "lb-name-silver"
                      : item.rank == 3
                      ? "lb-name-bronze"
                      : ""
                  }`}
                >
                  {item.name}
                </span>
              </div>
              <div className="lb-right">
                <img src={clock} alt="Clock" className="lb-clock" />
                <span className="lb-hours">{item.hours} hour</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lb-your-rank">
        <div className="lb-your-rank-top">
          <span className="lb-your-rank-text">Your Rank!</span>
          <span className="lb-course-time">Course watch time</span>
        </div>
        <div className="lb-your-rank-bottom">
          <div className="lb-your-rankleft">
            <span className="lb-your-rank-position">#{yourRank.rank}</span>
            <span className="lb-your-rank-name">{yourRank.name}</span>
          </div>
          <div className="lb-your-rank-time">
            <img src={clock} alt="Clock" className="lb-clock" />
            <span className="lb-hours">{yourRank.hours} hour</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
