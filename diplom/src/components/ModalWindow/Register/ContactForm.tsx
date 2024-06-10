import React, { useState } from "react";
import { Form, Input, DatePicker, TimePicker, Button, Checkbox } from 'antd';
import "./ModalWindow.css";

const ContactForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Receive values of form:', values);
    };

    return (
        <Form form={form} name="contact" onFinish={onFinish} autoComplete="off">
            <Form.Item label="Имя" name="name" rules={[{required: true, message: 'Пожалуйста, введите ваше имя'}]}>
                <Input />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{required: true, message: 'Пожалуйста, введите ваш email' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Номер телефона" name="phone" rules={[{required: true, message: 'Пожалуйста, введите ваш номер телефона' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Язык, который хочу изучать" name="course" rules={[{required: true, message: 'Пожалуйста, выберите желаемый курс' }]}>
                <select>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="german">German</option>
                </select>
            </Form.Item>
            <Form.Item label="Удобная дата для пробного занятия" name="date" rules={[{required: true, message: 'Пожалуйста, выберите дату' }]}>
                <DatePicker />
            </Form.Item>
            <Form.Item label="Удобное время для пробного занятия" name="time" rules={[{required: true, message: 'Пожалуйста, выберите время' }]}>
                <TimePicker />
            </Form.Item>
            <Form.Item label="Я соглашаюсь на обработку персональных данных">
                <Checkbox />
            </Form.Item>
            <Form.Item>
                <button type="submit" className="submit-button-form">Отправить</button>
            </Form.Item>
        </Form>
    );
};

export default ContactForm;