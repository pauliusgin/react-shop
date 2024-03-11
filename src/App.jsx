import React from "react";
import { Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/navbar/Navbar.jsx";
import Main from "./components/main/Main.jsx";
import { MyCards } from "./components/MyCards/MyCards.jsx";
import { Favorites } from "./components/favorites/Favorites.jsx";
// styles
import "./App.scss";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/my-cards" element={<MyCards />} />
				<Route path="favorites" element={<Favorites />} />
			</Routes>
		</>
	);
}

export default App;
