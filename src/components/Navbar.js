import React from "react";
import { FaHamburger } from "react-icons/fa";
import { useGlobalContext } from "../context";

function Navbar() {
	const { openHamburger, isHamburgerOpen } = useGlobalContext();

	if (isHamburgerOpen) {
		return <div>show the menu here</div>;
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
