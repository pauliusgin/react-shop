import React from "react";

function SortButtons({ handleSortData }) {
	return (
		<>
			<div className="main-container-action-button main-container-action-button-a-z">
				<button
					onClick={() => {
						handleSortData("az");
					}}
				>
					Sort A-Z
				</button>
			</div>
			<div className="main-container-action-button main-container-action-button-z-a">
				<button onClick={handleSortData}>Sort Z-A</button>
			</div>
		</>
	);
}

export { SortButtons };
