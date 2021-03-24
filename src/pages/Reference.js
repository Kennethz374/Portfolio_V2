import React, { useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { useGlobalContext } from "../context";

function Reference() {
	const { data, toggleReference, referenceIndex } = useGlobalContext();

	useEffect(() => {
		let slider = setInterval(() => {
			toggleReference("nextSlide");
		}, 15000);
		return () => {
			clearInterval(slider);
		};
	}, [referenceIndex, toggleReference]);

	return (
		<section className="ref_section">
			<div className="ref_title">
				<h2>
					<span>My</span>Reputation
				</h2>
			</div>
			<div className="section-center">
				{data.reference.map((person, personIndex) => {
					const { id, image, name, title, quote } = person;

					let position = "nextSlide";
					if (personIndex === referenceIndex) {
						position = "activeSlide";
					}
					if (
						personIndex === referenceIndex - 1 ||
						(referenceIndex === 0 && personIndex === data.reference.length - 1)
					) {
						position = "lastSlide";
					}

					return (
						<article id="article" className={position} key={id}>
							<img src={image} alt={name} className="person-img" />
							<h4>{name}</h4>
							<p className="title">{title}</p>
							<p className="text">{quote}</p>
							<FaQuoteRight className="icon" />
						</article>
					);
				})}
				<button className="prev" onClick={() => toggleReference("prevSlide")}>
					<FiChevronLeft />
				</button>
				<button className="next" onClick={() => toggleReference("nextSlide")}>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
}

export default Reference;
