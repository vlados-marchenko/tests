import React from "react";
import HeaderSite from "../../components/Header/HeaderSite";
import Footer from "../../components/Content/Footer/Footer";

function MainLayout({children}) {
    return (
        <div>
            <HeaderSite />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default MainLayout;