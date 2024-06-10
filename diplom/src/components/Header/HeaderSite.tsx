import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HeaderSite.css";
import ModalWindow from "../ModalWindow/Register/ModalWindow";


import logo from "../../assets/logo.svg";
import lk_icon from "../../assets/lk.svg"
import ModalSign from "../ModalWindow/log/ModalSign";

function HeaderSite() {
    
    return (
            <div className="content-header">
                <Link to={"/"}>
                    <img src={logo} alt="Campus logo" className="logo"/>
                </Link>
                <nav className="navbar">
                    <Link to="/about_us" className="navbar-link">О нас</Link>
                    <Link to="/courses" className="navbar-link">Курсы</Link>
                    <Link to="/stuff" className="navbar-link">Полезный стафф</Link>
                </nav>
                <div className="header__buttons">
                    <ModalWindow />
                    <ModalSign />
                    {/* <a href={"/sign_in"} className="header_sigin-link">
                        <img src={lk_icon} alt="lk icon" className="lk_icon"/>
                    </a> */}
                </div>
            </div>
    );
}

export default HeaderSite;