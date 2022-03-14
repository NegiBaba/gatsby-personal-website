import * as React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Home from "./Home/Home";
import About from "./About/About";

const App = () => {
	return (
		<>
			<NavigationBar />
			<Home />
			<About />
		</>
	);
};

export default App;
