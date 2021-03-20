import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = (props) => {
	return (
		<div className="navigation">
			<nav class="navbar navbar-expand navbar-dark bg-dark">
				<div class="container">
					<Link class="navbar-brand" href="/">
						<img src={logo} width="30" height="30" alt="" />
					</Link>

					<Link class="navbar-brand" to="/">
						Nurture
					</Link>

					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<Link class="nav-link" to="/">
								Home
							</Link>
						</li>

						<li class="nav-item">
							<Link class="nav-link" to="/map">
								Find Resources
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default withRouter(Navbar);
