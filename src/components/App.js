import * as React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Hobbies from "./Hobbies/Hobbies";

const App = () => {
	return (
		<>
			<NavigationBar />
			<Home />
			<About />
			<Skills />
			<Hobbies />
		</>
	);
};

export default App;
