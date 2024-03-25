import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Admin() {
	function handleSubmit() {
		console.log("Submit");
	}

	return (
		<div className="container ">
			<Form noValidate onSubmit={handleSubmit}>
				<Row className="mb-3 justify-content-start">
					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Label>Add Product</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="write something here"
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
				</Row>
				<Row className="mb-3 justify-content-center">
					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Label>Edit Product</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="write something here too"
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
				</Row>
				<Row className="mb-3 justify-content-end">
					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Label>Delete Product</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="write something here as well"
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
				</Row>
			</Form>
		</div>
	);
}

export { Admin };
