import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Map from "./components/Map";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Data from "./components/Data";
import Error from "./components/Error";

const App = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [data, setData] = useState({});
	const [loginState, setLoginState]= useState("");

	const submit = (history) => {
		axios
			.post("http://localhost:5000/login", {
				username,
				password,
			})
			.then((res) => {
				console.log(res.data);
				if (res.data === {}) {
					setLoginState("Please try again");
				} else {
					setData(res.data);
				}
			});
			history.push("/data");
	};

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
					<Route path="/login" exact>
						<Login
							onSubmit={(history) => submit(history)}
							setUsername={(value) => setUsername(value)}
							setPassword={(value) => setPassword(value)}
							disabled={!username || !password}
							loginState={loginState}
						/>
					</Route>
					<Route path="/data" exact>
						<Data data={data} />
					</Route>
					<Route path="/error" exact>
						<Error />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
