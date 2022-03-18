import * as React from "react";
import starsIcon from "./img/stars.png";
import frogIcon from "./img/frog.png";
import treesIcon from "./img/trees.png";
import { hobbiesContainer, hobbyCard } from "./Hobbies.module.scss";

const Hobbies = () => {
	return (
		<div className={`section ${hobbiesContainer}`}>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className={hobbyCard}>
							<img src={starsIcon} alt="Javascript icon"></img>
							<div>Astro Photography</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className={hobbyCard}>
							<img src={frogIcon} alt="Javascript icon"></img>
							<div>Macro Photography</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className={hobbyCard}>
							<img src={treesIcon} alt="Javascript icon"></img>
							<div>Orchard Management</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hobbies;
