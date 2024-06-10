import React from "react";
import "./SecondScreen.css";

const SecondScreen = () => {
    return (
        <div className="second-container">
            <h1>Courses</h1>
            <div className="card">
                <div className="face face1">
                    <div className="contant">
                         <h3>Английский язык</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="contant">
                        <p>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. 
                            Corporis eius exercitationem 
                            dolorum commodi debitis necessitatibus 
                        </p>
                        <a href="#">Подробнее</a>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="face face1">
                    <div className="contant">
                        <h3>Испанский язык</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="contant">
                        <p>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Corporis eius exercitationem 
                            dolorum commodi debitis necessitatibus 
                        </p>
                        <a href="#">Подробнее</a>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="face face1">
                    <div className="contant">
                        <h3>Немецкий язык</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="contant">
                        <p>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Corporis eius exercitationem 
                            dolorum commodi debitis necessitatibus 
                        </p>
                        <a href="#">Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondScreen;