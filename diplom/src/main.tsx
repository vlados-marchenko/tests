import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx'
import './index.css'
import Home from './pages/HomePage/Home.tsx';
import AboutUs from './pages/AboutUsPage/AboutUs.tsx';
import Courses from './pages/Courses/Courses.tsx';
import Stuff from './pages/Staff/Stuff.tsx';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import Profile from './pages/Profile/Profile.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about_us",
    element: <AboutUs />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/stuff",
    element: <Stuff />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
