import {
  emerald,
  rank,
  RarrowSvg,
  RupeesSvg,
  streak,
  WalletSvg,
} from "@/assets";
import "../../assets/styles/Home.css";
import {
  BrowseCourses,
  EnrolledCourses,
  Leaderboard,
  Modal,
  Sidebar,
  Streak,
} from "@/components";
import CardBadgeOff from "@/components/CardBadgeOff";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenLeaderboard,
  setOpenStreak,
} from "@/features/modals/modalsSlice";
function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const modal = useSelector((store) => store.modal);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="home">
        {width > 1024 && <Sidebar />}
        <div className="home-main">
          <div className="home-main-top">
            <div className="hmt-cards">
              <div className="hmt-card hmt-maximixe-skill">
                <div className="hmt-maximixe-skill-inner hmt-card-inner">
                  <div className="hmt-card-heading">
                    Maximize your skills <br />
                    <span className="htm-card-bold-head">on any 3 courses</span>
                  </div>
                  <div className="hmt-card-middle">
                    <div className="hmt-cm-row">
                      <RupeesSvg color="white" />
                      <div className="hmt-cm-row-text">
                        <span>Price :</span>
                        <span className="hmt-cmrt-price"> ₹ 799 </span>
                        <span className="hmt-cmrt-cutprice">₹2100</span>
                      </div>
                    </div>
                    <div className="hmt-cm-row">
                      <WalletSvg color="white" />
                      <div className="hmt-cm-row-text">
                        Increase Refund Validity by 1 Years*
                      </div>
                    </div>
                  </div>
                  <div className="hmt-card-explore">
                    <span>Explore now</span>
                    <RarrowSvg color="white" />
                  </div>
                </div>
                <div className="htm-card-off">
                  <CardBadgeOff percent={"62%"} />
                </div>
              </div>
              <div className="hmt-card hmt-accelerate-career">
                <div className="hmt-accelerate-career-inner hmt-card-inner">
                  <div className="hmt-card-heading">
                    Accelerate your Career <br />
                    <span className="htm-card-bold-head">
                      by All access pack
                    </span>
                  </div>
                  <div className="hmt-card-middle">
                    <div className="hmt-cm-row">
                      <RupeesSvg color="#333333" />
                      <div className="hmt-cm-row-text">
                        <span>Price :</span>
                        <span className="hmt-cmrt-price"> ₹ 1999 </span>
                        <span className="hmt-cmrt-cutprice">₹3799</span>
                      </div>
                    </div>
                    <div className="hmt-cm-row">
                      <WalletSvg color="#333333" />
                      <div className="hmt-cm-row-text">
                        Get Refund Validity to Lifetime*
                      </div>
                    </div>
                  </div>
                  <div className="hmt-card-explore">
                    <span>Explore now</span>
                    <RarrowSvg color="#800080" />
                  </div>
                </div>
                <div className="htm-card-off">
                  <CardBadgeOff percent={"47%"} />
                </div>
              </div>
            </div>
            <EnrolledCourses />
          </div>
          <BrowseCourses />
        </div>
        {width > 1024 ? (
          <div className="home-right">
            <Streak complete={false} />
            <Leaderboard />
          </div>
        ) : (
          <div className="home-bottom-modals">
            <div
              className="home-modal-streak-button home-modal-button"
              onClick={() => dispatch(setOpenStreak(true))}
            >
              <img src={streak} alt="Streak" />
              <span className="hmb-name">Streak</span>
              <span className="hmb-dot"></span>
              <span className="hmb-value">{user?.streak}</span>
            </div>
            <div
              className="home-modal-rank-button home-modal-button"
              onClick={() => dispatch(setOpenLeaderboard(true))}
            >
              <img src={rank} alt="Rank" />
              <span className="hmb-name">Rank</span>
              <span className="hmb-dot"></span>
              <span className="hmb-value">{user?.rank}</span>
            </div>
            <div className="home-modal-gems-button home-modal-button">
              <img src={emerald} alt="Gems" />
              <span className="hmb-name">Gems</span>
              <span className="hmb-dot"></span>
              <span className="hmb-value">{user?.gems}</span>
            </div>
          </div>
        )}
      </div>
      <Modal
        open={modal.openLeaderboard}
        onClose={() => dispatch(setOpenLeaderboard(false))}
      >
        <Leaderboard />
      </Modal>
      <Modal
        open={modal.openStreak}
        onClose={() => dispatch(setOpenStreak(false))}
      >
        <Streak complete={true} />
      </Modal>
    </>
  );
}

export default Home;
