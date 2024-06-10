import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/HomePage/Home";
import SignIn from "./pages/SignInPage/SignIn";
import AboutUs from "./pages/AboutUsPage/AboutUs";
import Profile from "./pages/Profile/Profile";





function Router(): JSX.Element {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/home" element={<Home />} />
          {/* <Route path="/about_us" element={<AboutUs />} /> */}
          {/* <Route path="/profile" element={<Profile />} />  */}
        </Routes>
      </BrowserRouter>
    );
}
  
export default Router;