import * as React from "react";
import { descriptionContainer, descriptionHeading } from "./About.module.scss";

const About = () => {
	return (
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-heading-container">
							<h2 className="section-heading">
								<b>About</b> Me
							</h2>
							<div className="heading-separator">
								<i className="bi bi-asterisk"></i>
							</div>
							<div className="section-sub-heading">
								Strive for perfection in everything you do. Take the best that
								exists and make it better. When it does not exist, design it.
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className={descriptionContainer}>
							<h3>
								Hello!<span> My name is Piyush Negi.</span>
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
