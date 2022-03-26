import * as React from "react";
import feMentor from "./imgs/FEmentor.jpg";
import fbImage from "./imgs/facebook.png";
import socialMedia from "./imgs/social.jpg";
import {
	projectCard,
	cardImage,
	hoverOverlay,
	cardTitle,
	cardSubTitle,
} from "./Projects.module.scss";

const Projects = () => {
	return (
		<section id="#projects" className="section ">
			<div className="container card-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-heading-container">
							<h2 className="section-heading">
								My <b>Projects</b>
							</h2>
							<div className="heading-separator">
								<i className="bi bi-asterisk"></i>
							</div>
							<div className="section-sub-heading text-mute">
								Here are the top projects that I have created or are in
								development, to learn and show off my development skills in
								different technologies.
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-lg-4">
						<div className={projectCard}>
							<img
								src={feMentor}
								className={cardImage}
								alt="Front-End mentor"
							></img>
							<div className={hoverOverlay}>
								<div className={cardTitle}>Front End Mentor</div>
								<div className={cardSubTitle}>UI Dev</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className={projectCard}>
							<img
								src={fbImage}
								className={cardImage}
								alt="Facebook webpage image"
							></img>
							<div className={hoverOverlay}>
								<div className={cardTitle}>Facebook helpdesk</div>
								<div className={cardSubTitle}>Full Stack</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className={projectCard}>
							<img
								src={socialMedia}
								className={cardImage}
								alt="Social Media webapp"
							></img>
							<div className={hoverOverlay}>
								<div className={cardTitle}>Social Media</div>
								<div className={cardSubTitle}>Full Stack</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Projects;
