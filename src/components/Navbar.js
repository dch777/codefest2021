import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = (props) => {
	return (
		<div className="navigation">
			<nav class="navbar navbar-expand navbar-dark bg-dark">
				<div class="container">
					<Link class="navbar-brand" to="/">
						<FontAwesomeIcon icon={faHome} />
					</Link>

					<Link class="navbar-brand" to="/">
						nurture
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

						<li class="nav-item">
							<Link class="nav-link" to="/login">
								Log In
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default withRouter(Navbar);
