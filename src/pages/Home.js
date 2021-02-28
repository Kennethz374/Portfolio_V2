import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import Experience from "../pages/Experience";

function Home() {
	const { data } = useGlobalContext();
	return (
		<>
			<section className="home_container">
				<div className="overlay"></div>
				<article className="home_info">
					<h1 className="home_name">I'm Kenneth</h1>
					<p className="home_description">
						a creative full-stack web dev with a background in Econics and 7
						years of experience in Maufacturing. My goal is to make web apps
						that solve people's problems
					</p>
					<Link to="/contact">
						<button className="home_contact_btn">CONTACT ME</button>
					</Link>

					<ul className="home_social_list">
						{data.socialList.map((social) => {
							return (
								<li key={social.id}>
									<a href={social.url} target="_blank">
										{social.icon}
									</a>
								</li>
							);
						})}
					</ul>
				</article>
			</section>
			<Experience />
		</>
	);
}

export default Home;
