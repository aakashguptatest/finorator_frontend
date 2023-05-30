import React, { useState } from "react";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { AiFillPieChart } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";


import "./Sidebar.css";

const menuItems = [
  {
    text: "Profile",
    icon: <FaUserCircle />,
    dropdownItems: [
      { text: "Portfolio", lk: "/portfolio" },
      { text: "Report", lk: "/report" },
      { text: "Transactions", lk: "/transaction" },
      { text: "Watchlist", lk: "/mf/watchlist" }

    ],
  },
  {
    text: "Investment",
    icon: <MdOutlineMessage />,
    lk: "/investments",
  },
  {
    text: "Plan/Calculator",
    icon: <FaUserCircle />,
    lk: "/plan",
  },
  {
    text: "Downloads",
    icon: <AiFillPieChart />,
    lk: "/mf/downloads",
  },
  {
    text: "Help & Supports",
    icon: <FaShoppingCart />,
    lk: "/help",
  },
  {
    text: "Settings",
    icon: <FaShoppingCart />,
    dropdownItems: [
      { text: "Bank Mandate Details", lk: "/demat" },
      { text: "Basic Information", lk: "/basic" },
      { text: "Login/Change Password", lk: "/demat" },
      { text: "Demat/Account Closure", lk: "/demat" }

    ],
  },
  {
    text: "Research/Blogs",
    icon: <FaShoppingCart />,
    dropdownItems: [
      { text: "Research", lk: "/research" },
      { text: "Blogs", lk: "/blogs" },
   
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
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="sidebar-menu">
        {menuItems.map(({ text, icon, lk, dropdownItems }, index) => (
        <React.Fragment key={index}>
          {dropdownItems ? (
            <Dropdown style={{marginLeft: "0"}}>
              <Dropdown.Toggle
                variant="tertiary"
                style={{width: "100%", marginLeft: "0", marginTop: 0, marginBottom: 0}}
                id="dropdown-button"
                className={`menu-item ${isExpanded ? "" : "collapsed"}`}
              >
                {icon}
                {isExpanded && <span style={{fontSize: "large"}}>{text}</span>}
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
