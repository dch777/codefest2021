import React from "react";
import Map from "./components/Map";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<div id="app">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/map" exact>
						<Map />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
