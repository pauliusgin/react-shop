import React, { useState, createContext, useEffect } from "react";
import mockData from "../mockData.js";

const AppContext = createContext();

function AppContextProvider({ children }) {
	const [data, setData] = useState(
		JSON.parse(localStorage.getItem("data")) || mockData
	);
	const [cardData, setCardData] = useState(
		JSON.parse(localStorage.getItem("cardData")) || []
	);
	const [favoritesData, setFavoritesData] = useState(
		JSON.parse(localStorage.getItem("favoritesData")) || []
	);

	useEffect(() => {
		console.log("triggered!!!");
		localStorage.setItem("data", JSON.stringify(data));
		localStorage.setItem("cardData", JSON.stringify(cardData));
	}, [data, cardData]);

	useEffect(() => {
		localStorage.setItem("favoritesData", JSON.stringify(favoritesData));
	}, [favoritesData]);

	function handleAddToCard(item) {
		setCardData([...cardData, item]);

		const filteredData = data.filter(
			(dataItem) => dataItem.title !== item.title
		);
		setData(filteredData);
	}

	function handleRemoveFromCard(item) {
		setData([...data, item]);

		const filteredCardData = cardData.filter(
			(dataItem) => dataItem.title !== item.title
		);

		setCardData(filteredCardData);
	}

	function handleAddToFavorites(item) {
		setFavoritesData([...favoritesData, item]);
	}

	function handleRemoveFromFavorites(item) {
		const filteredFavoritesData = favoritesData.filter(
			(dataItem) => dataItem.title !== item.title
		);
		setFavoritesData(filteredFavoritesData);
	}

	return (
		<AppContext.Provider
			value={{
				data,
				setData,
				cardData,
				setCardData,
				favoritesData,
				setFavoritesData,
				handleAddToCard,
				handleRemoveFromCard,
				handleAddToFavorites,
				handleRemoveFromFavorites,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export { AppContext, AppContextProvider };
