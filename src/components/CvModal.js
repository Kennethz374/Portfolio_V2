import React from "react";
import { useGlobalContext } from "../context";
import cv from "../images/CV.png";
function CvModal() {
	return (
		<div className="backdrop">
			<img src={cv} alt="cv" />
		</div>
	);
}

export default CvModal;
