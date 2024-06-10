import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./SignIn.css";
import PasswordInput from "../../components/PasswordInput/PasswordInput";

function SignIn(): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(0);

    // const onSubmit = async () => {
    //     return <Navigate to="/dashboard" />;
    // }

    return (
        <div className="container">
            <form className="sign-in_form">
                <h3 className="sign-in_form-title">Sign In</h3>
                <div className={"form_sign-input-block"}>
                    <label htmlFor="email" className={"form_sign-email-label"}>Email</label>
                    <input type="email" className={`${error !== 0 && (email === "" && password === "") ? "input-error" : ""} form_sign-input-email`}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }} />
                </div>
                <div className={"form_sign-input-password"}>
                    <PasswordInput onChange={(event) => {
                        setPassword(event.target.value);
                    }} className={`${error !== 0 && (email === "" && password === "") ? "input-error" : ""}`} />
                </div>
                {error === 400 && (email === "" && password === "") && <p className="error-message">Incorrect data</p>}
                {error === 404 && (email === "" && password === "") &&
                <p className="error-message">Invalid login or password</p>}
                {error === 500 && (email === "" && password === "") && <p className="error-message">Server is unavailable</p>}
                {error !== 0 && (email === "" && password === "") && <p className="error-message">Error</p>}
                <Link to={"/dashboard"} className={"form_sign-continue-button"}>Continue</Link>
            </form>
            <span>Забыли пароль?</span>
        </div>
    )
}

export default SignIn;