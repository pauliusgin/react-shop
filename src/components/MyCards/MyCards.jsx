import React, { useContext } from "react";
import "../../App.scss";
// utils
import { sortAlphabetically } from "../../utils/sortUtils";
// components
import Card from "../card/Card";
import { SortButtons } from "../buttons/SortButtons";
// context
import { AppContext } from "../../context/AppContext";

function MyCards() {
	const { cardData, setCardData, handleRemoveFromCard } =
		useContext(AppContext);

	function handleSortData(direction) {
		const sortedData = sortAlphabetically(cardData, direction);
		setCardData(sortedData);
	}

	return (
		<main className="cards-container">
			<SortButtons handleSortData={handleSortData} />

			{cardData?.map(({ title, description }) => (
				<Card
					key={title}
					title={title}
					description={description}
					handleCardButton={handleRemoveFromCard}
					card={true}
				/>
			))}
		</main>
	);
}

export { MyCards };
