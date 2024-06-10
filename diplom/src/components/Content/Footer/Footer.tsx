import React from "react";
import "./Footer.css";
import { BiLogoTelegram, BiLogoVk, BiLogoWhatsapp } from "react-icons/bi";

const Footer = () => {
    return (
        <div className="footer">
            <h1 className="footer_logo">Campus</h1>
            <nav className="footer_navigation">
                <ul className="footer_navigation_list">
                    <li className="footer_home">
                        <a href="/about_us">О НАС</a>
                    </li>
                    <li className="navigation_list_footer-item">
                        <a href="/courses">КУРСЫ</a>
                    </li>
                    <li className="navigation_list_footer-item">
                        <a href="/stuff">ПОЛЕЗНЫЙ СТАФФ</a>
                    </li>
                </ul>
            </nav>
            <div className="footer_contacts">
                <p>Свяжитесь с нами</p>
                <ul className="footer_contacts_list">
                    <li className="footer_contacts-item">
                        <div className="telegram">
                            <BiLogoTelegram className="iconF"/>
                        </div>
                    </li>
                    <li className="footer_contacts-item">
                    <div className="vk">
                        <BiLogoVk className="iconF"/>
                    </div>
                    </li>
                    <li className="footer_contacts-item">
                        <div className="whatsapp">
                            <BiLogoWhatsapp className="iconF"/>
                        </div>
                    </li>
                </ul>
            </div>
            <p className="rights_info">
                © 2024 - Campus. All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer;