import React, { useState } from "react";
import "./ContentHeader.css";

import pic from "../../../assets/Image1.png";
import { BiEdit } from "react-icons/bi";
import ModalEdit from "../../ModalWindow/Edit/ModalEdit";

const data = [
    {
        name: 'Мария',
        lastname: 'Иванова',
        email: 'ivanova24@mail.ru',
        password: '*******'
    }
];

const ProfileCard = () => {


    return (
        <div className="content">
             {/* <div className="edit-profile">
                <h2>Редактировать профиль</h2>
                <div className="icon-edit">
                    <BiEdit className="ic" />
                </div>
            </div> */}
            {/* <ModalEdit /> */}
            <div className="profile-container">
                <div className="img-container">
                    <img src={pic} />
                    <div className="edi">
                    <h4 className="edit-img">Редактировать фото</h4>
                        <div className="edit">
                            <BiEdit className="icon" />
                        </div>
                    </div>
                </div>
                <div className="info-container">
                    <div className="info-list">

                        {data.map((teacher) => (
                            <div className="list">
                                <div className="teacher--detail">
                                    <h2>Имя: {teacher.name}</h2>
                                    <h2>Фамилия: {teacher.lastname}</h2>
                                    <h2>Email: {teacher.email}</h2>
                                    <h2>Password: {teacher.password}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ModalEdit />
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;