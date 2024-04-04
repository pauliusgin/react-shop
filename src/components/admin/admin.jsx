import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { cfg } from "../../cfg/config";
import { useAuth } from "../../hooks/useAuth";
import { AppContext } from "../../context/AppContext";

function Admin() {
	const [validated, setValidated] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState({
		value: null, // success | danger
		message: "",
	});
	const { token } = useAuth();
	const { fetchProducts } = useContext(AppContext);

	async function handleSubmit(event) {
		event.preventDefault();
		event.stopPropagation();
		setValidated(true);

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			return;
		}
		console.log("submitting data:", title, description);

		try {
			setLoading(true);

			const data = {
				title,
				description,
			};

			// add a prop to the request only if it is provided
			// if (prop.trim()) { data.prop = prop}

			const response = await fetch(`${cfg.API.HOST}/product`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(data),
			});

			const product = await response.json();

			if (!response.ok) {
				console.log("product:", product);
				throw new Error("Oh noes, you failed...", product.error);
			}
			setStatus({
				value: "success",
				message: "Such good, so awesome product..!",
			});
			fetchProducts();
		} catch (err) {
			setStatus({
				value: "danger",
				message: "Much bad, so product..!",
			});
			console.log("error while submitting:", err.message);
			console.log("error while submitting:", err.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="container admin-container">
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				{status.value && <Alert variant={status.value}>{status.message}</Alert>}
				<Row className="mb-3 justify-content-start">
					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Label>Title</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Enter product title..."
							value={title}
							onChange={(event) => setTitle(event.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Please provide a title.
						</Form.Control.Feedback>
					</Form.Group>
				</Row>
				<Row className="mb-3 justify-content-center">
					<Form.Group as={Col} md="4" controlId="validationCustom02">
						<Form.Label>Description</Form.Label>
						<Form.Control
							required
							as="textarea"
							rows={5}
							style={{ resize: "none" }}
							placeholder="Add product description.."
							value={description}
							onChange={(event) => setDescription(event.target.value)}
						/>
						<Form.Control.Feedback type="invalid">
							Please provide a description.
						</Form.Control.Feedback>
					</Form.Group>
				</Row>
				<Button type="submit" disabled={loading} className="text-center">
					Create product
				</Button>
				{loading && <Spinner animation="border" variant="danger" />}
			</Form>
		</div>
	);
}
export { Admin };
