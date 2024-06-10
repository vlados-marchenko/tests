import React from "react";
import ProfileHeader from "./ProfileHeader";
import './profile.css';
import Image1 from './Image1.png';
import { BiBook } from 'react-icons/bi';

const courses = [
    {
        title: 'Spanish',
        duration: '2 Hours',
        icon: <BiBook />
    },
    {
        title: 'English',
        duration: '2 Hours',
        icon: <BiBook />
    },
    {
        title: 'German',
        duration: '2 Hours',
        icon: <BiBook />
    }
];

const Profile = () => {
    return (
        <div className="profile">
            <ProfileHeader />

            <div className="user--profile">
                <div className="user--detail">
                    <img src={Image1} alt="" />
                    <h3 className="username">Prof. Maria</h3>
                    <span className="profession">Teacher</span>
                </div>

                <div className="user-courses">
                    { courses.map( (course) => (
                        <div className="course">
                            <div className="course-detail">
                                <div className="course-cover">{course.icon}</div>
                                <div className="course-name">
                                    <h5 className="title">{course.title}</h5>
                                    <span className="duration">{course.duration}</span>
                                </div>
                            </div>
                            <div className="action">:</div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
};

export default Profile;