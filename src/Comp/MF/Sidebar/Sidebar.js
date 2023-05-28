import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import Dropdown from 'react-dropdown';

import { useNavigate } from "react-router";

import "./Sidebar.css";

const menuItems = [
  {
    text: "Portfolio",
    icon: <BsDownload />,
    lk: "/portfolio",
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
];

const Sidebar = () => {
  const nav = useNavigate();
  const [isExpanded, setExpandedState] = useState(false);
  const optionsSettings = [
    'Bank Mandate Detials', 'Basic Information', 'Login/Change Password', 'Demat/Account Closure'
  ];
  const optionsBlogs = [
    'Research', 'Blogs'
  ];
  const optionsProfile = [
    'Profile', 'Portfolio', "Transaction", "Reports", "Watchlist"
  ];
  const defaultOptionProfile = "Profile";
  const defaultOptionSettings = "Settings";
  const defaultOptionResearch = "Research/Blogs"
  const handleDropdownSelectSettings = (selectedOption) => {
    if (selectedOption.value == "Basic Information"){
      nav(`/basic`)
    }
    else{
      nav(`/demat`)}
  };
  const handleDropdownSelectResearchc = (selectedOption) => {
    if (selectedOption.value == "Research"){
      nav(`/research`)
    }
    else{
      nav(`/mf/blogs`)}
  };
  const handleDropdownSelectProfile = (selectedOption) => {
    if (selectedOption.value == "Profile"){
      nav(`/profile`)
    }
    if (selectedOption.value == "Portfolio"){
      nav(`/portfolio`)
    }
    if (selectedOption.value == "Transaction"){
      nav(`/transaction`)
    }
    if (selectedOption.value == "Reports"){
      nav(`/reports`)
    }
    if (selectedOption.value == "Watchlist"){
      nav(`/mf/watchlist`)
    }  };
 
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
        <Dropdown
            options={optionsProfile}
            onChange={handleDropdownSelectProfile}
            value={defaultOptionProfile}
            placeholder="Select an option"
          />

        <Dropdown
            options={optionsSettings}
            onChange={handleDropdownSelectSettings}
            value={defaultOptionSettings}
            placeholder="Select an option"
          />
          <Dropdown
            options={optionsBlogs}
            onChange={handleDropdownSelectResearchc}
            value={defaultOptionResearch}
            placeholder="Select an option"
          />

          {menuItems.map(({ text, icon, lk }, index) => (
            <a
              key={index}
              className={`menu-item ${isExpanded ? "" : "collapsed"}`}
              href={lk}
            >
              {icon}
              {isExpanded && <span>{text}</span>}
            </a>
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

export default Sidebar;
