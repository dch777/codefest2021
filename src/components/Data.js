import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Data = (props) => {
	const [username, setUsername] = useState(props.data["username"]);
	const [password, setPassword] = useState(props.data["password"]);
	const [capacity, setCapacity] = useState(props.data["center capacity"]);
	const [address, setAddress] = useState(props.data["center address"]);
	const [name, setName] = useState(props.data["center name"]);
	const history = useHistory();

	const submit = () => {
		setUsername(props.data["username"]);
		axios.post("https://f4300ef5819b.ngrok.io/updateinfo", {
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
			<h3>Welcome, {props.data["username"]}!</h3>
			<br />
			<form>
				<div class="form-group">
					<label for="password">Enter New Password</label>
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
					<label for="capacity">Enter New Capacity</label>
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
					<label for="Address">Enter New Address</label>
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
					<label for="capacity">Enter New Center Name</label>
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

export default Data;
