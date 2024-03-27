import React, { useState } from "react";
import { Button, Form, Row, Col, Offcanvas, Spinner } from "react-bootstrap";
import watermelon from "../../styles/assets/images/watermelon.jpg";

import "./AdminUser.scss";

function AdminUser() {
	const [validated, setValidated] = useState(false);
	const [loading, setLoading] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	async function handleSubmit(event) {
		event.preventDefault();
		event.stopPropagation();
		setValidated(true);

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			return;
		}

		try {
			setLoading(true);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}

		setPassword("");
		setUsername("");
		setValidated(false);
	}

	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
		setValidated(false);
		setPassword("");
		setUsername("");
	};
	const handleShow = () => setShow(true);

	return (
		<div className="admin-user">
			<Button variant="warning" onClick={handleShow} className="me-2">
				Login
			</Button>
			<Offcanvas show={show} onHide={handleClose} placement="end">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Login Panel</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
						<Row className="mb-3">
							<Form.Group as={Col} md="6" controlId="validationCustom01">
								<Form.Label>Username:</Form.Label>
								<Form.Control
									required
									type="text"
									placeholder="Enter username"
									value={username}
									onChange={(event) => setUsername(event.target.value)}
								/>
								<Form.Control.Feedback type="invalid">
									Please enter a username.
								</Form.Control.Feedback>
							</Form.Group>
						</Row>
						<Row className="mb-3">
							<Form.Group as={Col} md="6" controlId="validationCustom02">
								<Form.Label>Password:</Form.Label>
								<Form.Control
									required
									type="password"
									placeholder="Enter password"
									value={password}
									onChange={(event) => setPassword(event.target.value)}
								/>
								<Form.Control.Feedback type="invalid">
									Please enter a password.
								</Form.Control.Feedback>
							</Form.Group>
						</Row>
						<Button className="submit-button" type="submit" disabled={loading}>
							Submit
						</Button>
						{loading && <Spinner animation="border" variant="danger" />}
					</Form>
					<div className="watermelon-basket">
						<img src={watermelon} alt="watermelon" className="watermelon" />
					</div>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
}

export { AdminUser };
