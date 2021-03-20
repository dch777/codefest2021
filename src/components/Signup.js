import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const SignUp = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [capacity, setCapacity] = useState(0);
	const [address, setAddress] = useState("");
	const [name, setName] = useState("");
	const history = useHistory();

	const submit = () => {
		//axios.post("http://localhost:5000/signup", {
		axios.post("https://f4300ef5819b.ngrok.io/signup", {
			username,
			password,
			capacity,
			address,
			name,
		});
		history.push("/");
	};

	return (
		<div className="center">
			<h3> Sign Up! </h3>
			<br />
			<form>
				<div class="form-group">
					<label for="Username">Enter Username</label>
					<input
						value={username}
						type="username"
						class="form-control"
						id="username"
						placeholder="Username"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div class="form-group">
					<label for="password">Enter Password</label>
					<input
						value={password}
						type="password"
						class="form-control"
						id="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div class="form-group">
					<label for="capacity">Enter Capacity</label>
					<input
						value={capacity}
						type="number"
						class="form-control"
						id="capacity"
						placeholder="Capacity"
						onChange={(e) => setCapacity(e.target.value)}
					/>
				</div>
				<div class="form-group">
					<label for="Address">Enter Address</label>
					<input
						value={address}
						type="address"
						class="form-control"
						id="address"
						placeholder="Address"
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>
				<div class="form-group">
					<label for="capacity">Enter Center Name</label>
					<input
						value={name}
						class="form-control"
						id="name"
						placeholder="Name"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div class="btn-group">
					<button type="submit" class="btn btn-primary btn-md" onClick={submit}>
						Submit
					</button>
				</div>
				<div value={props.loginState} class="alert alert-light" />
			</form>
		</div>
	);
};

export default SignUp;
