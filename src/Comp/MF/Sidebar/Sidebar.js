import React, { useState } from "react";
import { FaUserCircle,  FaHandHolding, FaCalculator, FaResearchgate, FaSearch } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import { FaDownload } from "react-icons/fa";

import "./Sidebar.css";

const menuItems = [
  {
    text: "Profile",
    icon: <FaUserCircle />,
    dropdownItems: [
      { text: "Portfolio", lk: "/mf/portfolio" },
      { text: "Report", lk: "/mf/report" },
      { text: "Transactions", lk: "/mf/transaction" },
      { text: "Watchlist", lk: "/mf/watchlist" }

    ],
  },
  {
    text: "Investment",
    icon: <MdOutlineMessage />,
    lk: "/mf/investments",
  },
  {
    text: "Plan/Calculator",
    icon: <FaCalculator />,
    lk: "/plan",
  },
  {
    text: "Downloads",
    icon: <FaDownload />,
    lk: "/mf/downloads",
  },
  {
    text: "Help & Supports",
    icon: <FaHandHolding />,
    lk: "/help",
  },
  {
    text: "Settings",
    icon: <FaSearch />,
    dropdownItems: [
      { text: "Bank Mandate Details", lk: "/mf/settings/demat" },
      { text: "Basic Information", lk: "/mf/settings/basic" },
      { text: "Login/Change Password", lk: "/mf/settings/demat" },
      { text: "Demat/Account Closure", lk: "/mf/settings/demat" }

    ],
  },
  {
    text: "Research/Blogs",
    icon: <FaResearchgate />,
    dropdownItems: [
      { text: "Research", lk: "/research" },
      { text: "Blogs", lk: "/mf/blogs" },
   
    ],
  }

];
  

const Sidebar = () => {
  const [isExpanded, setExpandedState] = useState(false);
 
  const toggleSidebar = () => {
    setExpandedState(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
      <div className="sidebar-upper">
        <div className="sidebar-heading">
          {isExpanded && (
            <div className="sidebar-brand">
              <h2>DashBoard</h2>
            </div>
          )}
          <button className = {`sidebar-toggle${isExpanded ? "expanded" : ""}`} onClick={toggleSidebar} >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="sidebar-menu">
        {menuItems.map(({ text, icon, lk, dropdownItems }, index) => (
        <React.Fragment key={index}>
          {dropdownItems ? (
            <Dropdown style={{marginLeft: "0", fontSize: "large"}}>
              <Dropdown.Toggle
              fontSize = "small"
                variant="tertiary"
                style={{width: "100%", marginLeft: "0", marginTop: 0, marginBottom: 0, fontSize: "0"}}
                id="dropdown-button"
                className={`menu-item ${isExpanded ? "" : "collapsed"}`}
              >
                {icon}
                {isExpanded && <span style={{fontSize: "small"}}>{text}</span>}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {dropdownItems.map((item, index) => (
                  <Dropdown.Item key={index} href={item.lk}>
                    {item.text}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <a
              key={index}
              className={`menu-item ${isExpanded ? "" : "collapsed"}`}
              href={lk}
            >
              {icon}
              {isExpanded && <span>{text}</span>}
            </a>
          )}
        </React.Fragment>
      ))}
        </div>      </div>
      <div className="sidebar-footer">
        {isExpanded && (
          <div className="sidebar-details">
            <img
              className="sidebar-footer-avatar"
              src="icons/admin-avatar.svg"
              alt=""
            />
            <div className="sidebar-footer-info">
              <p className="sidebar-footer-user-name">M Showkat</p>
              <p className="sidebar-footer-user-position">Store Admin</p>
            </div>
          </div>
        )}
        <img className="logout-icon" src="../icons/logout.svg" alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
