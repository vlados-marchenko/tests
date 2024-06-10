import React, { ChangeEventHandler, useState } from "react";
import "./PasswordInput.css";

export type Props = {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string;
    className?: string;
}

const PasswordInput = ({onChange, value, className}: Props): JSX.Element => {
    const[isShown, setIsShown] = useState(false);

    const togglePassword = (): void => {
        setIsShown((isShown) => !isShown);
    };

    return (
        <div className="form-input-password">
            <label htmlFor="password" className="label-password">Password</label>
            <div className="password-window">
                <input className={`${className} input-password`} value={value} onChange={onChange} type={isShown? "text" : "password"} />
                {isShown && <button className="password_icon" onClick={togglePassword}></button>}
                {!isShown && <button className="password_icon-isShow" onClick={togglePassword}></button>}
            </div>
        </div>
    );
};

export default PasswordInput;