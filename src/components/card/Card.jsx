import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./card.scss";

function Card({ title, description, handleCardButton, card }) {
	const { favoritesData, handleAddToFavorites, handleRemoveFromFavorites } =
		useContext(AppContext);

	const isFavorite = favoritesData.some((item) => item.title === title);

	function handleAddToCard() {
		handleCardButton({ title, description });
	}

	return (
		<div className="card item-card">
			<div className="card__icon-container">
				<FontAwesomeIcon
					icon={faHeart}
					className={`card__icon ${
						isFavorite ? "card__icon-active" : ""
					} `}
					onClick={() => {
						isFavorite
							? handleRemoveFromFavorites({ title, description })
							: handleAddToFavorites({ title, description });
					}}
				/>
			</div>
			<h3 className="card__title">{title}</h3>
			<p className="card__description">{description}</p>
			<button onClick={handleAddToCard} className="card__button">
				{card ? "Remove from My Cards" : "Add to My Cards"}
			</button>
		</div>
	);
}

export default Card;
