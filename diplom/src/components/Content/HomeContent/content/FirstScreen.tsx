import React from "react";
import "./FirstScreen.css";
import earth_pic from "../../../../assets/earth.svg";
import SecondScreen from "./SeconsScreen";



const FirstScreen = () => {


    return (
        <div className="first-container">
            <div className="left-container">
                <h1>Lorem ipsum sit amet, consect</h1>
                <button className="course-button" >Выбрать курс</button>
            </div>

            <div className="right-container">
                <div className="main-block">
                    
                </div>
                
                <div className="content">
                    <h2>Lorem ipsum</h2>
                    <h3>Your Personal Experience</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consecte
                    </p>
                </div>
                <div className="location">
                    <img src={earth_pic} />
                    <span>EVERYWHERE</span>
                </div>
            </div>

        </div>
    )
    
}

export default FirstScreen;
