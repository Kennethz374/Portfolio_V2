import React from "react";
import { FaHamburger } from "react-icons/fa";
import { GiSkullCrossedBones } from "react-icons/gi";
import { useGlobalContext } from "../context";

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
							<li key={navItem.id}>
								<a href={navItem.url}>
									<div className="nav_icon">{navItem.icon}</div>
									<div className="nav_text">{navItem.text}</div>
								</a>
							</li>
						);
					})}
					{console.log(data)}
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
				<h1 className="nav_logo">Kz'</h1>
				<ul className="nav_category">
					{data.navList.map((category) => {
						return (
							<li className="category_item" key={category.id}>
								<a href={category.url}>{category.text}</a>
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
