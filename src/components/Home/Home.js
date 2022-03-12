import * as React from "react";
import { useState, useEffect } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import {
	homeContainer,
	headingText,
	subHeadingContainer,
	subHeading,
	buttonContainer,
} from "./Home.module.scss";

const Home = () => {
	const helloList = [
		"नमस्ते",
		"Hello",
		"こんにちわ",
		"Hola",
		"你好",
		"ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
		"안녕하세요",
	];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setIndex((index + 1) % helloList.length);
		}, 3000);
	});

	return (
		<section className={`${homeContainer} section`}>
			<div className="container">
				<div className="row text-center">
					<div className="col-lg-12">
						<SwitchTransition mode="out-in">
							<CSSTransition
								classNames="fade"
								addEndListener={(node, done) => {
									node.addEventListener("transitionend", done, false);
								}}
								key={helloList[index]}
							>
								<h4>{helloList[index]}</h4>
							</CSSTransition>
						</SwitchTransition>
						<div className={headingText}>
							I am <b>Piyush</b>
						</div>
						<div
							className={`d-flex justify-content-center ${subHeadingContainer}`}
						>
							<h6 className={subHeading}>Web Developer</h6>
							<h6 className={subHeading}>Photgrapher</h6>
							<h6 className={subHeading}>Apple orchardist</h6>
						</div>
						<div className={buttonContainer}>
							<div className="cta-button">Download resume</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;