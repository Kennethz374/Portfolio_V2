import React from "react";
// import { useGlobalContext } from "../context";

function ExpItem(job) {
	return (
		<>
			<div className="exp_item" key={job.id}>
				<div className="exp_item_title">
					<h2>{job.organization}</h2>
					<h3>{job.position}</h3>
					<h4>{job.date}</h4>
				</div>

				<div className="exp_item_content">
					<img src={job.image} alt={job.organization} />
					<p>{job.desc}</p>
				</div>
			</div>
		</>
	);
}

export default ExpItem;
