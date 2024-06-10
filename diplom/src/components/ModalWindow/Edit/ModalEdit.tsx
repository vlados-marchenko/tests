import React, { useState } from "react";
import { Modal } from 'antd';
import EditForm from "./EditForm";

const ModalEdit = () => {
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
            <button className="t" onClick={showModal}>Редактировать профиль</button>
            <Modal 
                title="Редактировать данные профиля"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel} 
                footer={null}>
                    <EditForm />
                </Modal>
        </>
    );
};

export default ModalEdit;