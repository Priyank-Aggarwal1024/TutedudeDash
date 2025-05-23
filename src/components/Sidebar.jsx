import {
  BookSvg,
  CertificateSvg,
  CrossSvg,
  DropDownSvg,
  ExternalLinkSvg,
  HamburgerSvg,
  logo,
  MedalSvg,
  ReferAndEarnSvg,
  ReferEarnSvg,
  ResumeSvg,
} from "@/assets";
import "../assets/styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "@/features/navbar/navbarSlice";
import { useState } from "react";
function Sidebar() {
  const user = useSelector((store) => store.user.user);
  const { isOpen } = useSelector((store) => store.navbar);
  const dispatch = useDispatch();
  const [selectOpen, setSelectOpen] = useState(false);
  return (
    <>
      <div className="sidebar">
        <div
          className="sidebar-hamburger"
          onClick={() => dispatch(toggleNavbar())}
        >
          {isOpen ? <CrossSvg /> : <HamburgerSvg />}
        </div>
        <div className="sidebar-logo">
          <img src={logo} alt="Tutedude Logo" />
        </div>
        <div className={`sidebar-main ${isOpen && "sidebar-open"}`}>
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
          <div
            className="sidebar-user"
            onClick={() => setSelectOpen(!selectOpen)}
          >
            {selectOpen && (
              <div
                className="sidebar-user-select"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sidebar-user-select-option">Profile</div>
                <div className="sidebar-user-select-option">Logout</div>
              </div>
            )}
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
        <div className="sidebar-mobilelinks">
          <div className="sidebar-mobilelink">
            <span>Upgrade Courses</span>
            <ExternalLinkSvg />
          </div>
          <div className="sidebar-mobilelink">
            <span>Refer &Earn</span>
            <ReferEarnSvg />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
