import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Reference from "./pages/Reference";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
				<Route exact path="/experience">
					<Experience />
				</Route>
				<Route exact path="/projects">
					<Projects />
				</Route>
				<Route exact path="/reference">
					<Reference />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
