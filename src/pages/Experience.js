import React from "react";
import { useGlobalContext } from "../context";
import ExpItem from "../components/ExpItem";
import CvModal from "../components/CvModal";

function Experience() {
	const { data, toggleExp, jobShow, toggleCV, isCVOpen } = useGlobalContext();
	console.log(isCVOpen);
	return (
		<section className="exp_container">
			<div className="exp_center">
				<h2 className="exp_title">Experience</h2>
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
								return <ExpItem {...job} key={job.id} />;
							}
							if (jobShow === 0) {
								return (
									<>
										<ExpItem {...job} key={job.id} />
									</>
								);
							}
							return null;
						})}
					</article>
					{isCVOpen ? (
						<CvModal />
					) : (
						<button id="CV-btn" onClick={toggleCV}>
							Show CV
						</button>
					)}
				</div>
			</div>
		</section>
	);
}

export default Experience;
