import React from "react";

import "../css/Contact.css";

const formSpreeId = process.env.REACT_APP_FORMSPREE_ID;
function Contact() {
	return (
		<section className="contact-page">
			<article className="contact-form">
				<h1>get in touch</h1>
				<form action={`https://formspree.io/f/${formSpreeId}`} method="POST">
					<div className="form-group">
						<input
							type="text"
							name="name"
							placeholder="name"
							className="form-control"
						/>
						<input
							type="email"
							placeholder="email"
							name="email"
							className="form-control"
						/>
						<textarea
							name="message"
							rows="5"
							placeholder="message"
							className="form-control"
						></textarea>
					</div>
					<button type="submit" className="submit-btn btn">
						submit here
					</button>
				</form>
			</article>
		</section>
	);
}

export default Contact;
