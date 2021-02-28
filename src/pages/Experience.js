import React from "react";
import { useGlobalContext } from "../context";
import ExpItem from "../components/ExpItem";

function Experience() {
	const { data, toggleExp, jobShow } = useGlobalContext();
	return (
		<section className="exp_container">
			<div className="exp_center">
				<h2 className="exp_title">
					Experience
					<hr />
				</h2>
				<div className="exp_info">
					<button className="all" onClick={() => toggleExp(0)}>
						All
					</button>
					<div className="exp_nav">
						{data.exp.map((job) => {
							return (
								<button
									key={job.id}
									onClick={() => {
										toggleExp(job.id);
									}}
								>
									{job.abbr}
								</button>
							);
						})}
					</div>

					<article className="exp_job">
						{data.exp.map((job) => {
							if (jobShow === job.id) {
								return <ExpItem {...job} />;
							}
							if (jobShow === 0) {
								return (
									<>
										<ExpItem {...job} />
									</>
								);
							}
						})}
					</article>
					<button id="CV-btn">Show CV</button>
				</div>
			</div>
		</section>
	);
}

export default Experience;
