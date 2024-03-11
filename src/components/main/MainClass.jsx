import React from "react";
import mockData from "../../mockData.js";

//components
import "./main.scss";
import Card from "../card/Card.jsx";

class Main extends React.Component {
    constructor() {
        // kuria pirmines vertes, kurias turime tik uzkrovus puslapi
        super();
        this.state = {
            data: mockData,
        };
    }

    render() {
        // ka pavaizduosime ekrane
        const { data } = this.state;

        const handleSortData = (direction) => {
            const sortedData = data.sort((a, b) => {
                let fa = a.title.toLowerCase();
                let fb = b.title.toLowerCase();

                if (fa < fb) return direction === "az" ? -1 : 1;

                if (fa > fb) return direction === "za" ? 1 : -1;

                return 0;
            });

            this.setState({
                data: sortedData,
            });
        };

        return (
            <main className="main-container">
                <div className="main-action-button main-action-button-a-z">
                    <button onClick={() => handleSortData("az")}>
                        Sort A-Z
                    </button>
                </div>
                <div className="main-action-button main-action-button-z-a">
                    <button onClick={handleSortData}>Sort Z-A</button>
                </div>

                {data.map(({ title, description }) => (
                    <Card key={title} title={title} description={description} />
                ))}
            </main>
        );
    }
}

export default Main;
