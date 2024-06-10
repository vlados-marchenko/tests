import React from "react";
import ContentHeader from "../ContentHeader";
import StudentsList from "../../../../side/StudentsList";
import "./content.css";
import Card from "./Card";

const Content = () => {
    return (
        <div className="content">
            <ContentHeader />
            <Card />
            <StudentsList />
        </div>
    )
};

export default Content;