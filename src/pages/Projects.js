import React from "react";

import ProjectCard from "../components/ProjectCard";
import { useGlobalContext } from "../context";
import "../css/Projects.css";

function Projects() {
	const { data } = useGlobalContext();
	return (
		<section className="project">
			<article className="project_section_title">
				<h1>Latest Projects</h1>
			</article>
			<article className="project_container">
				{data.projects.map((project) => {
					return <ProjectCard {...project} key={project.id} />;
				})}
			</article>
		</section>
	);
}

export default Projects;
