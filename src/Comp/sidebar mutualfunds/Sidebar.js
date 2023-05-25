import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import "./Sidebar.css";
import { Link } from "react-scroll";

const menuItems = [
  {
    text: "Profile",
    icon: <BsDownload />,
    lk: "welcome-section"
  },
  {
    text: "FAQ",
    icon: <BsFillBookmarkCheckFill />,
    lk:"qa-section"
  },
  {
    text: "Segments",
    icon: <MdOutlineMessage />,
    lk:"Segment"
  },
  {
    text: "Blogs",
    icon: <FaUserCircle />,
    lk:"blogs"
  },
  {
    text: "Downloads",
    icon: <AiFillPieChart />,
    lk:"downloads"
  },
  {
    text: "Settings",
    icon: <FaShoppingCart />,
    lk: ""
  },
];

const SidebarMF = () => {
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
          {menuItems.map(({ text, icon, lk }, index) => (
            <Link
              key={index}
              className={`menu-item ${isExpanded ? "" : "collapsed"}`}
               spy={true} smooth={true}
               to = {lk}
            >
              {icon}
              {isExpanded && <span>{text}</span>}
            </Link>
          ))}
        </div>
      </div>
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

export default SidebarMF;