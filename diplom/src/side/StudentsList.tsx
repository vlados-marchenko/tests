import React from "react";
import "./students.css";
import  Image1  from '../assets/Image1.png';
import { Table } from "antd";

const students = [
    {
        image: Image1,
        name: 'Maria',
        level: 'Intermediate',
        city: 'Moscow'
    },
    {
        image: Image1,
        name: 'Tolya',
        level: 'Intermediate',
        city: 'Omsk'
    },
    {
        image: Image1,
        name: 'Daniil',
        level: 'Intermediate',
        city: 'Irkutsk'
    },
    {
        image: Image1,
        name: 'Nikita',
        level: 'Beginner',
        city: 'Orel'
    },
    {
        image: Image1,
        name: 'Alexa',
        level: 'Beginner',
        city: 'Canada'
    }, 
    {
        image: Image1,
        name: 'Maria',
        level: 'Intermediate',
        city: 'Moscow'
    },
    {
        image: Image1,
        name: 'Tolya',
        level: 'Intermediate',
        city: 'Omsk'
    }
];
 
const StudentsList = () => {
    return (
        <div className="student--list">
            <div className="list--header">
                <h2>Students</h2>
                <select>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="german">German</option>
                </select>
            </div>
            <div className="list--container">
                {students.map((student) => (
                    <div className="list">
                        <div className="student--detail">
                            <img src={student.image} alt={student.name} />
                            <h2>{student.name}</h2>
                        </div>
                        <span>{student.level}</span>
                        <span>{student.city}</span>
                        <span className="student--todo">:</span>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default StudentsList;