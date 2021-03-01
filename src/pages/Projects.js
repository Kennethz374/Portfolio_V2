import React from "react";
import ProjectCard from "../components/ProjectCard";
import { useGlobalContext } from "../context";

function Projects() {
	const { data } = useGlobalContext();
	return (
		<section className="project">
			<article className="project_section_title">
				<h1>Latest Projects</h1>
			</article>
			<article className="project_container">
				{/* single item */}
				{data.projects.map((project) => {
					return <ProjectCard {...project} key={project.id} />;
				})}
				{/* end of single item */}
			</article>
		</section>
	);
}

export default Projects;
