import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mt-0 ">
			<Link to="/">
				<span className="navbar-brand mb-0 bg-success"></span>
			</Link>
			<div className="ml-auto">
				<Link to="/AñadirContacto">
					<button className="btn btn-primary me-5">Añadir contacto</button>
				</Link>
			</div>
		</nav>
	);
};
