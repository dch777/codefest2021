import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
	const history = useHistory();

	return (
		<div className="center">
			<h3> Log In! </h3>
			<div>
				<form>
					<div class="form-group">
						<label for="username">Username</label>
						<input
							type="username"
							class="form-control"
							id="username"
							placeholder="Enter username"
							onChange={(e) => props.setUsername(e.target.value)}
						/>
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input
							type="password"
							class="form-control"
							id="password"
							placeholder="Password"
							onChange={(e) => props.setPassword(e.target.value)}
						/>
					</div>
					<div class="btn-group">
						<button
							type="submit"
							class="btn btn-primary btn-md"
							disabled={props.disabled}
							onClick={() => props.onSubmit(history)}
						>
							Submit
						</button>
						<Link type="signup" class="btn btn-danger btn-md" to="/signup">
							Sign Up
						</Link>
					</div>
					<div value={props.loginState} class="alert alert-light" />
				</form>
			</div>
		</div>
	);
};

export default Login;
