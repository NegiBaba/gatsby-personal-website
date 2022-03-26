import * as React from "react";
import { descriptionContainer, descriptionText } from "./About.module.scss";

const About = () => {
	return (
		<section id="#about" className="section">
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
							<div className="section-sub-heading text-mute">
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
								Hello!<span> I&#39;M Piyush Negi.</span>
							</h3>
							<div className="sub-title-list m-0 pt-3 text-mute">
								<h6 className="sub-title">Challenger</h6>
								<h6 className="sub-title">Quick Learner</h6>
								<h6 className="sub-title">Perfectionist</h6>
							</div>
							<div className={descriptionText}>
								A 4th year Computer Science and Engineering student in Lovely
								Professional University, Phagwara. I love to challenge myself to
								do things that others find hard and sometimes impossible. I am
								passionate about learning and teaching the stuff that I know
								verbally as well as practically.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
