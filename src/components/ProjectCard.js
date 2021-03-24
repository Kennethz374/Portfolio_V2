import React from "react";
import { FaHome } from "react-icons/fa";
function ProjectCard({
	projectTitle,
	projectDesc,
	projectImg,
	projectSite,
	projectCode,
}) {
	return (
		<div className="project_card">
			<div className="project_img">
				<img src={projectImg} alt={projectTitle} className="project_img" />
				<div className="project_home_logo">
					<a href={projectSite} target="_blank" rel="noreferrer">
						<FaHome />
					</a>
				</div>
			</div>

			<div className="project_card_info">
				<h4>{projectTitle}</h4>
				<p>{projectDesc}</p>
				<div className="project_card_footer">
					<a href={projectCode}>Source Code</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
