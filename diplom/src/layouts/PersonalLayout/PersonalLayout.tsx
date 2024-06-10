import React from "react";
import HeaderSite from "../../components/Header/HeaderSite";
import Footer from "../../components/Content/Footer/Footer";
import Sidebar from "../../components/SideBar/Sidebar";
import ContentHeader from "../../components/Content/DashboardContent/ContentHeader";
import "./PersonalLayout.css";
import "../../components/Content/DashboardContent/content/content.css"

function PersonalLayout({children}) {
    return (
        <div className="dashboard">
            <Sidebar />
            <ContentHeader />
            <div>{children}</div>
        </div>
    )
}

export default PersonalLayout;