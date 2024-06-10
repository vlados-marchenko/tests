import React, { useState } from "react";
import { Modal } from 'antd';
import ContactForm from "./ContactForm";

const ModalWindow = () => {
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
            <button className="header_register-btn" onClick={showModal}>Записаться</button>
            <Modal 
                title="Записаться на пробное занятие"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel} 
                footer={null}>
                    <ContactForm />
                </Modal>
        </>
    );
};

export default ModalWindow;