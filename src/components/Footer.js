import React from "react";
import { useGlobalContext } from "../context";

function Footer() {
	const { data } = useGlobalContext();
	return (
		<footer className="footer">
			<div>
				<ul className="footer_social_list">
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
				<h4>
					copyright&copy;{new Date().getFullYear()}
					<span> Kenneth Zhang </span> all rights reserved
				</h4>
			</div>
		</footer>
	);
}

export default Footer;
