import React, { useContext, useState } from "react";
import "./main.scss";
// utils
import { sortAlphabetically } from "../../utils/sortUtils.js";
// components
import Card from "../card/Card.jsx";
import { SortButtons } from "../buttons/SortButtons.jsx";
// context
import { AppContext } from "../../context/AppContext.jsx";

function Main() {
	const { data, setData, handleAddToCard } = useContext(AppContext);
	const [searchValue, setSearchValue] = useState("");

	function handleSortData(direction) {
		const sortedData = sortAlphabetically(data, direction);
		setData(sortedData);
	}

	return (
		<main className="main-container">
			<SortButtons handleSortData={handleSortData} />
			<input
				className="main-controls__input"
				type="text"
				placeholder="Search..."
				onChange={(e) => {
					setSearchValue(e.target.value.toLowerCase());
				}}
			></input>

			{data
				.filter(
					({ title, description }) =>
						title.toLowerCase().includes(searchValue) ||
						description.toLowerCase().includes(searchValue)
				)

				.map((item) => (
					<Card
						key={item.title}
						title={item.title}
						description={item.description}
						handleCardButton={handleAddToCard}
					/>
				))}
		</main>
	);
}

export default Main;
