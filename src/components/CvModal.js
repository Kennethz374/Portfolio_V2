import React from "react";
import { useGlobalContext } from "../context";
import cv from "../images/CV.png";
function CvModal() {
	const { toggleCV } = useGlobalContext();
	const handleBackdropClose = (e) => {
		if (e.target.classList.contains("backdrop")) {
			toggleCV();
		}
	};
	return (
		<div className="backdrop" onClick={handleBackdropClose}>
			<img src={cv} alt="cv" className="cv-img" />
		</div>
	);
}

export default CvModal;
