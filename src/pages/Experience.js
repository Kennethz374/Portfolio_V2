import React from "react";
import { useGlobalContext } from "../context";

function Experience() {
	const { data } = useGlobalContext();
	return (
		<section className="exp_container">
			<div className="exp_overlay"></div>
			<div className="exp_center">
				<h2 className="exp_title">
					Experience
					<hr />
				</h2>
				<div className="exp_info">
					<button className="all">All</button>
					<div className="exp_nav">
						{data.exp.map((job) => {
							return <button key={job.id}>{job.abbr}</button>;
						})}
					</div>

					<article className="exp_job">
						{/* {data.exp.map((job) => {
						return (
							<>
								<div className="header" key={job.id}>
									<h4>{job.position}</h4>
									<button>{job.organization}</button>
									<h6>{job.date}</h6>
								</div>
								<ul className="exp_desc">
									<li>{job.desc}</li>
								</ul>
							</>
						);
					})} */}
					</article>
				</div>
			</div>
		</section>
	);
}

export default Experience;
