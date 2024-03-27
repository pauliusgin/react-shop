import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { AdminUser } from "../AdminUser/AdminUser";

function Navbar() {
	return (
		<nav className="nav-container">
			<h1>My Shop</h1>
			<ul>
				<li>
					<NavLink to="/">All items</NavLink>
				</li>
				<li>
					<NavLink to="/my-cards">My Cards</NavLink>
				</li>
				<li>
					<NavLink to="/favorites">Favorites</NavLink>
				</li>
				<li>
					<NavLink to="/admin">Admin</NavLink>
				</li>
			</ul>
			<AdminUser />
		</nav>
	);
}

export default Navbar;
