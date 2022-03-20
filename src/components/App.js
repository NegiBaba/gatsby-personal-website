import * as React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Hobbies from "./Hobbies/Hobbies";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";

const App = () => {
	return (
		<>
			<NavigationBar />
			<Home />
			<About />
			<Skills />
			<Hobbies />
			<Projects />
			<Footer />
		</>
	);
};

export default App;
