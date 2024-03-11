import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Offcanvas from "react-bootstrap/Offcanvas";
import watermelon from "../../styles/assets/images/watermelon.jpg";

import "./User.scss";

function User() {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		async function fetchUser() {
			setLoading(true);
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users/2"
				);

				if (!response.ok)
					throw new Error("Oh noes, you lost your internets...");

				const data = await response.json();
				setUser(data);
			} catch (error) {
				console.log(error.message);
			} finally {
				setLoading(false);
			}
		}
		fetchUser();
	}, []);

	return (
		<>
			{loading && (
				<Spinner
					className="spinner-size"
					animation="border"
					variant="primary"
				/>
			)}
			{!loading && (
				<>
					<button className="user" onClick={handleShow}>
						{user?.username[0]}
					</button>
					<Offcanvas show={show} onHide={handleClose} placement="end">
						<Offcanvas.Header closeButton className="testas-parent">
							<Offcanvas.Title className="testas-child">
								{
									<h3 className="menu__title">
										{user?.name}, a.k.a {user?.username}
									</h3>
								}
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<>
								<p>
									<span className="first">Company: </span>
									{user?.company.name}
								</p>
								<p>
									<span className="first">Address: </span>
									{`${user?.address.city} / ${user?.address.street} / ${user?.address.suite}`}
								</p>
								<p>
									<span className="first">Phone: </span>
									{` ${user?.phone}`}
								</p>
								<p>
									<span className="first">Email: </span>
									{` ${user?.email}`}
								</p>
								<p>
									<span className="first">Website: </span>
									{` ${user?.website}`}
								</p>
								<div className="watermelon-basket">
									<img
										src={watermelon}
										alt="watermelon"
										className="watermelon"
									/>
								</div>
							</>
						</Offcanvas.Body>
					</Offcanvas>
				</>
			)}
		</>
	);
}

export { User };
