import React, { useState } from "react";
import { Button, Spinner, Offcanvas } from "react-bootstrap";
import watermelon from "../../styles/assets/images/watermelon.jpg";

import "./AdminUser.scss";

function AdminUser() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="warning" onClick={handleShow} className="me-2">
				Login
			</Button>
			<Offcanvas show={show} onHide={handleClose} placement="end">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Login Panel</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					Some text as placeholder. In real life you can have the elements you
					have chosen. Like, text, images, lists, etc.
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export { AdminUser };
