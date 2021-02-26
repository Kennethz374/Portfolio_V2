import React from "react";
import { FaHamburger } from "react-icons/fa";
import { GiSkullCrossedBones } from "react-icons/gi";
import { useGlobalContext } from "../context";

function Navbar() {
	const { openHamburger, isHamburgerOpen, data } = useGlobalContext();

	if (isHamburgerOpen) {
		return (
			<div className="nav_menu_container">
				<div className="nav_close_btn" onClick={openHamburger}>
					<GiSkullCrossedBones />
				</div>
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
					<li>facebook</li>
					<li>gmail</li>
					<li>linkedin</li>
				</ul>
			</div>
		);
	} else {
		return (
			<nav className="nav-container">
				<h1 className="nav_logo">Kz' Portfolio</h1>
				<div className="nav_bar" onClick={openHamburger}>
					<FaHamburger />
				</div>
			</nav>
		);
	}
}

export default Navbar;
