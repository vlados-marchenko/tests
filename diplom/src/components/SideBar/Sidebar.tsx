import React from "react";
import { BiBookAlt, BiHome, BiSolidCalendar, BiSolidPhotoAlbum, BiChat } from 'react-icons/bi';
import "./sidebar.css";
import { Link } from "react-router-dom";

// import logo from "../../assets/logo.svg";


const Sidebar = () => {
    return (
    <div className="menu">
        <div className="logo-s">
            <BiBookAlt className="logo-icon"/>
            {/* <img src={logo} /> */}
            <h2><Link to={"/"}>Campus</Link></h2>
        </div>

        <div className="menu--list">
            <a href="/dashboard" className="item active">
                <BiHome className="icon"/>
                Dashboard
            </a>
            <a href="/profile" className="item">
                <BiSolidPhotoAlbum className="icon"/>
                Profile
            </a>
            <a href="/schedule" className="item">
                <BiSolidCalendar className="icon"/>
                Schedule
            </a>
            <a href="/chats" className="item">
                <BiChat className="icon"/>
                Chats
            </a>
        </div>
    </div>
    )
};

export default Sidebar;