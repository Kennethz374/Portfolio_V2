import React from "react";

import "../css/About.css";

function About() {
	return (
		<section className="about_container">
			<h1>About Me</h1>
			<article className="section_one">
				<p className="p1">
					&ensp;&ensp; Hi, I am Kenneth Zhang. A full-stack web developer with a
					background in Economics and 7 years of experience in Manufacturing. My
					goal is to make useful web applications that help solving people's
					problems.
				</p>
				<img
					className="avatar"
					src="https://i.ibb.co/q0wx5vF/edf.jpg"
					alt="edf"
				/>
			</article>
			<hr />
			<article className="section_one">
				<img
					className="avatar"
					src="https://i.ibb.co/zVZMLQ8/rpt.jpg"
					alt="rpt"
				/>
				<p className="p1">
					&ensp;&ensp; I am also a father of two. During my free time I enjoy
					playing with my 2 children.
				</p>
			</article>
			<hr />
			<article className="section_one">
				<p className="p1">
					&ensp;&ensp; aside from programming, I like to play basketball with my
					friends on the weekends.
				</p>
				<img
					className="avatar"
					src="https://i.ibb.co/FHcfDGt/basketball.jpg"
					alt="basketball"
				/>
			</article>
			<hr />
		</section>
	);
}

export default About;
