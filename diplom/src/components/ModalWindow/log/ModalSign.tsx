import React, { useState } from "react";
import { Modal } from 'antd';
import SignIn from "../../../pages/SignInPage/SignIn";
import lk_icon from "../../../assets/lk.svg";


const ModalSign = () => {
    const[visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <button className="lk_icon" onClick={showModal}>Войти</button>
            <Modal 
                title=""
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel} 
                footer={null}>
                    <SignIn />
                </Modal>
        </>
    );
};

export default ModalSign;