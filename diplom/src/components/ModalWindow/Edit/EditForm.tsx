import React, { useState } from "react";
import { Form, Input, DatePicker, TimePicker } from 'antd';
import "./ModalEdit.css";

const EditForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Receive values of form:', values);
    };

    return (
        <Form form={form} name="edit" onFinish={onFinish} autoComplete="off">
            <Form.Item label="Имя" name="name" rules={[{required: true, message: 'Имя'}]}>
                <Input />
            </Form.Item>
            <Form.Item label="Фамилия" name="lastname" rules={[{required: true, message: 'Фамилия' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{required: true, message: 'Email' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{required: true, message: 'Password' }]}>
                <Input />
            </Form.Item>
            <Form.Item>
                <button type="reset" className="submit-button-form">Сохранить</button>
            </Form.Item>
        </Form>
    );
};

export default EditForm;