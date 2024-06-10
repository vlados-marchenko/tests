import React from "react";
import { BiBookAlt, BiHome, BiSolidCalendar, BiSolidPhotoAlbum, BiChat } from 'react-icons/bi';
// import "./SBPR.css";
import "./sidebar.css";


const SBPR = () => {
    return (
    <div className="menu">
        <div className="logo-s">
            <BiBookAlt className="logo-icon"/>
            <h2>Campus</h2>
        </div>

        <div className="menu--list">
            <a href="/dashboard" className="item">
                <BiHome className="icon"/>
                Dashboard
            </a>
            <a href="/profile" className="item active">
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

export default SBPR;