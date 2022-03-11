import * as React from "react";
import { customNav, brandTitle, link } from "./NavigationBar.module.scss";

const NavigationBar = () => {
	return (
		<nav className={`navbar fixed-top navbar-expand-lg ${customNav}`}>
			<div className="container">
				<span className={`navbar-brand mb-0 h1 fw-bold ${brandTitle}`}>
					Navbar
				</span>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarLinksToggler"
					aria-controls="navbarLinksToggler"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarLinksToggler"
				>
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className={`nav-link ${link}`} href="#home">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className={`nav-link ${link}`} href="#about">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className={`nav-link ${link}`} href="#home">
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a className={`nav-link ${link}`} href="#home">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className={`nav-link ${link}`} href="#home">
								Photography
							</a>
						</li>
						<li className="nav-item">
							<a className={`nav-link ${link}`} href="#home">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavigationBar;
