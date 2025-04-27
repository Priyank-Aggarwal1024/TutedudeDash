import {
  BookSvg,
  CertificateSvg,
  DropDownSvg,
  logo,
  MedalSvg,
  ReferAndEarnSvg,
  ResumeSvg,
} from "@/assets";
import "../assets/styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Sidebar() {
  const user = useSelector((store) => store.user.user);
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="Tutedude Logo" />
        </div>
        <div className="sidebar-main">
          <div className="sidebar-links">
            <NavLink
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
              to={"/"}
            >
              {({ isActive }) => (
                <>
                  <BookSvg
                    startColor={`${isActive ? "#B73BBE" : "#666666"}`}
                    endColor={`${isActive ? "#992E9D" : "#666666"}`}
                  />
                  <span className="sidebar-link-name">Dashboard</span>
                </>
              )}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
              to={"/refer-and-earn"}
            >
              {({ isActive }) => (
                <>
                  <ReferAndEarnSvg
                    color={`${isActive ? "#B73BBE" : "#666666"}`}
                  />
                  <span className="sidebar-link-name">Refer and Earn</span>
                </>
              )}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
              to={"/certificate"}
            >
              {({ isActive }) => (
                <>
                  <CertificateSvg
                    color={`${isActive ? "#B73BBE" : "#666666"}`}
                  />
                  <span className="sidebar-link-name">Certificate</span>
                </>
              )}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
              to={"/hackathon"}
            >
              {({ isActive }) => (
                <>
                  <MedalSvg color={`${isActive ? "#B73BBE" : "#666666"}`} />
                  <span className="sidebar-link-name">Hackathon</span>
                </>
              )}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
              to={"/build-resume"}
            >
              {({ isActive }) => (
                <>
                  <ResumeSvg color={`${isActive ? "#B73BBE" : "#666666"}`} />
                  <span className="sidebar-link-name">Build Resume</span>
                </>
              )}
            </NavLink>
          </div>
          <div className="sidebar-user">
            <div className="sidebar-user-detail">
              <div className="sidebar-ud-usericon">
                {String(user?.name)
                  .split(" ")
                  .map((word) => word[0].toUpperCase())
                  .join("")}
              </div>
              <div className="sidebar-ud-name">{user?.name}</div>
            </div>
            <DropDownSvg />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
