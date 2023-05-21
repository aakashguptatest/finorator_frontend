import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
	const [isExpanded, setExpendState] = useState(false);
    console.log("hello")
	const menuItems = [
		{
			text: "Downloads",
			icon: "icons/grid.svg",
			lk: "/downloads"
		},
		{
			text: "Watchlist",
			icon: "icons/user.svg",
			lk: "/watchlist"
		},
		{
			text: "Reports",
			icon: "icons/message.svg",
			lk: "/reports"
		},
		{
			text: "Profile",
			icon: "icons/pie-chart.svg",
			lk: "/profile"
		},
		{
			text: "Portflio",
			icon: "icons/folder.svg",
			lk: "/portfolio"
		},
		{
			text: "Invest",
			icon: "icons/shopping-cart.svg",
			lk: "/Page1"
		},
		{
			text: "Investment",
			icon: "icons/shopping-cart.svg",
			lk: "/investment"
		}
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/Logo.svg" alt=""  />
							<h2>Finorator</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon, lk }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href={lk}
						>
							<img className="menu-item-icon" src={icon} alt="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							
						/>
						<div className="nav-footer-info">
							{/* <p className="nav-footer-user-name">M Showkat</p> */}
							{/* <p className="nav-footer-user-position">store admin</p> */}
						</div>
					</div>
				)}
				<img className="logout-icon" src="../icons/logout.svg" alt=""  />
			</div>
		</div>
	);
};


export default Sidebar;
