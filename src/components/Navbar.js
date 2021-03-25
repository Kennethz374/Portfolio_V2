import React from "react";
import { FaHamburger } from "react-icons/fa";
import { GiSkullCrossedBones } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../context";
import logo from "../images/logo.png";
import "../css/Navbar.css";

function Navbar() {
	const { openHamburger, isHamburgerOpen, data } = useGlobalContext();

	if (isHamburgerOpen) {
		return (
			<div className={`nav_menu_container`}>
				<button className="nav_close_btn" onClick={openHamburger}>
					<GiSkullCrossedBones />
				</button>
				<ul className="nav_menu">
					{data.navList.map((navItem) => {
						return (
							<motion.li
								key={navItem.id}
								initial={{ x: "-100vw" }}
								animate={{ x: 0 }}
							>
								<Link to={navItem.url}>
									<div className="nav_icon">{navItem.icon}</div>
									<div className="nav_text">{navItem.text}</div>
								</Link>
							</motion.li>
						);
					})}
				</ul>
				<ul className="nav_social">
					{data.socialList.map((social) => {
						return (
							<li key={social.id}>
								<a href={social.url}>{social.icon}</a>
							</li>
						);
					})}
				</ul>
			</div>
		);
	} else {
		return (
			<nav className="nav-container">
				<Link to="/">
					<img src={logo} alt="Kz" className="nav_logo" />
				</Link>
				<ul className="nav_category">
					{data.navList.map((category) => {
						return (
							<li className="category_item" key={category.id}>
								<Link to={category.url}>{category.text}</Link>
							</li>
						);
					})}
				</ul>
				<button className="nav_bar" onClick={openHamburger}>
					<FaHamburger />
				</button>
			</nav>
		);
	}
}

export default Navbar;
