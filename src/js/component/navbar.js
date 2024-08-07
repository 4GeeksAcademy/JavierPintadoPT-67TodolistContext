import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar ">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
				<Link to="/AñadirContacto">
					<button className="btn btn-primary">Añadir contacto</button>
				</Link>
			</div>
		</nav>
	);
};
