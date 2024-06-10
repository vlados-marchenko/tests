import React from "react";
import FirstScreen from "./content/FirstScreen";
import SecondScreen from "./content/SeconsScreen";

const HomeContent = () => {
    return (
        <div className="content">
            <FirstScreen />
            <SecondScreen />
        </div>
    )
}

export default HomeContent;