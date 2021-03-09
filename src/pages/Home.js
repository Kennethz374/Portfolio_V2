import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import Experience from "../pages/Experience";
import Projects from "./Projects";
import Reference from "./Reference";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CvModal from "../components/CvModal";

function Home() {
	const { data, isCVOpen } = useGlobalContext();
	if (isCVOpen) {
		return <CvModal />;
	}
	return (
		<>
			<section className="home_container">
				<div className="overlay"></div>
				<article className="home_info">
					<h1 className="home_name">
						<span>I'm</span> Kenneth
					</h1>
					<p className="home_description">
						a creative full-stack web dev with a background in Economics and 7
						years of experience in Maufacturing. My goal is to make web apps
						that solve people's problems
					</p>
					<Link to="/contact">
						<button className="home_contact_btn">
							CONTACT ME <BsChat />
						</button>
					</Link>

					<ul className="home_social_list">
						{data.socialList.map((social) => {
							return (
								<li key={social.id}>
									<a href={social.url} target="_blank" rel="noreferrer">
										{social.icon}
									</a>
								</li>
							);
						})}
					</ul>
				</article>
			</section>
			<Experience />
			<Projects />
			<Reference />
			<About />
			<Contact />
		</>
	);
}

export default Home;
