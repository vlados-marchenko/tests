import React from "react";
import ProfileHeader from "./ProfileHeader";
import "./ContentHeader.css";
import ProfileCard from "./ProfileCard";
import StudentsList from "../../../side/StudentsList";
import ModalEdit from "../../ModalWindow/Edit/ModalEdit";

const ContentProfileHeader = () => {
    return (
        <div className="content">
            <ProfileHeader />
            <ProfileCard />
            {/* <StudentsList /> */}
        </div>
    )
};

export default ContentProfileHeader;