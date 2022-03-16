import * as React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";

const App = () => {
	return (
		<>
			<NavigationBar />
			<Home />
			<About />
			<Skills />
		</>
	);
};

export default App;
