import React, { useContext } from "react";
import "./Favorites.scss";
// utils
import { sortAlphabetically } from "../../utils/sortUtils.js";
// components
import Card from "../card/Card.jsx";
import { SortButtons } from "../buttons/SortButtons.jsx";
// context
import { AppContext } from "../../context/AppContext.jsx";

function Favorites() {
	const { favoritesData, setFavoritesData } = useContext(AppContext);

	function handleSortData(direction) {
		const sortedData = sortAlphabetically(favoritesData, direction);
		setFavoritesData(sortedData);
	}

	return (
		<div className="favorites-container">
			<SortButtons handleSortData={handleSortData} />
			{favoritesData.map((item) => (
				<Card
					key={item.title}
					title={item.title}
					description={item.description}
					handleCardButton={() => {}}
				/>
			))}
		</div>
	);
}

export { Favorites };
