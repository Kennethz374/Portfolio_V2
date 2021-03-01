import React from "react";
import { FaHome } from "react-icons/fa";

function Projects() {
	return (
		<section className="project_container">
			{/* single item */}
			<div className="project_card">
				<div className="project_img">
					<img
						src="https://html-css-portfolio-css-grid-project.netlify.app/images/project-1.jpeg"
						alt="random img"
						className="project_img"
					/>
					<div className="project_home_logo">
						<a href="/">
							<FaHome />
						</a>
					</div>
				</div>

				<div className="project_card_info">
					<h4>Project Title</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
						commodi cumque deleniti, ratione corrupti repellat minus at labore
						laboriosam laudantium voluptates blanditiis molestias unde nostrum
						ex! Iusto saepe cumque voluptatem!
					</p>
					<div className="project_card_footer">
						<a href="">Source Code</a>
					</div>
				</div>
			</div>
			{/* end of single item */}
		</section>
	);
}

export default Projects;
