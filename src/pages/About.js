import React from "react";

import "../css/About.css";

function About() {
	return (
		<section className="about_container">
			<h1>About Me</h1>

			<article className="section_one">
				<div className="p1-container">
					<p className="p1">
						&ensp;&ensp; Hi, my name is Kenneth Zhang, a junior full-stack web
						developer who genuinely passionate about making innovative
						applications that help solving real problems.
						<br />
						&ensp;&ensp; I like being a developer because there are always
						things to learn and to improve. Currently, I am focus on learing
						MongoDb, Express, React and Node.js. The "MERN" stack allows me to
						build all different kinds of web applications.
					</p>
				</div>
				<div className="avatar-container">
					<img
						className="avatar"
						src="https://i.ibb.co/q0wx5vF/edf.jpg"
						alt="edf"
					/>
				</div>
			</article>

			<hr />

			<article className="section_one">
				<div className="avatar-container">
					<img
						className="avatar"
						src="https://i.ibb.co/zVZMLQ8/rpt.jpg"
						alt="rpt"
					/>
				</div>
				<div className="p1-container">
					<p className="p1">
						&ensp;&ensp; I am also a father of two lovely children. My daugter
						is almost three years old and my son is just 4 months old. During my
						free time, I enjoy staying with my family.
					</p>
				</div>
			</article>
			<hr />
			<article className="section_one">
				<div className="p1-container">
					<p className="p1">
						&ensp;&ensp; Aside from programming, I like to play basketball with
						my friends on the weekends.
					</p>
				</div>
				<div className="avatar-container">
					<img
						className="avatar"
						src="https://i.ibb.co/FHcfDGt/basketball.jpg"
						alt="basketball"
					/>
				</div>
			</article>
			<hr />
		</section>
	);
}

export default About;
