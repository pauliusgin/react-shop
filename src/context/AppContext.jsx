import React, { useState, createContext, useEffect } from "react";
import { cfg } from "../cfg/config";

const AppContext = createContext();

function AppContextProvider({ children }) {
	const [data, setData] = useState([]);
	const [cardData, setCardData] = useState(
		JSON.parse(localStorage.getItem("cardData")) || []
	);
	const [favoritesData, setFavoritesData] = useState(
		JSON.parse(localStorage.getItem("favoritesData")) || []
	);

	useEffect(() => {
		async function fetchProducts() {
			try {
				console.log("NODE_ENV", process.env.NODE_ENV);
				console.log("host", cfg.API.HOST);
				// const response = await fetch("http://localhost:3000/product");
				const response = await fetch(`${cfg.API.HOST}/product`);

				const products = await response.json();
				console.log("data:", products);

				const filteredProducts = products.filter(
					(product) =>
						!cardData.some((cardItem) => cardItem.title === product.title)
				);
				setData(filteredProducts);
			} catch (err) {
				console.error(err.message);
			}
		}
		fetchProducts();
	}, []);

	useEffect(() => {
		localStorage.setItem("cardData", JSON.stringify(cardData));
	}, [cardData]);

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
