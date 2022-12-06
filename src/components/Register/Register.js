import React, {useState} from 'react';
import Form from '../Form/Form';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useFormWithValidation} from "../Validation/Validation";
import {useLocation} from "react-router-dom";

function Register({onRegister, isError, errorText, resetErrorText}) {

    const currentUser = React.useContext(CurrentUserContext);

    const {isValid, errors, values, handleChange, setIsValid } = useFormWithValidation();

    const checkValidity = (!isValid);

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(values);
        setIsValid(false)
    }

    return (
        <Form handleSubmit={handleSubmit} isError={isError}
              errorText={errorText} resetErrorText={resetErrorText} checkValidity={checkValidity}
              title="Добро пожаловать!" buttonText="Зарегистрироваться"
              question="Уже зарегистрированы?" path="/signin" link="Войти">
            <label className="form__label">
                <span className="form__text">Имя</span>
                <input type="text" name="name" className="form__input"
                       value={values.name || ''} onChange={handleChange}
                       placeholder="Мария" minLength='2' maxLength='30' required/>
                <span className="input_invalid">{errors.name || ''}</span>
            </label>
            <label className="form__label">
                <span className="form__text">E-mail</span>
                <input type="email" name="email" className="form__input"
                       value={values.email || ''} onChange={handleChange}
                       placeholder="Maru.Aruko@yandex.ru" required/>
                <span className="input_invalid">{errors.email || ''}</span>
            </label>
            <label className="form__label">
                <p className="form__text">Пароль</p>
                <input type="password" name="password"
                       className="form__input" value={values.password || ''}
                       onChange={handleChange} placeholder="••••••••••••••" required/>
                <span className="input_invalid">{errors.password || ''}</span>
            </label>
        </Form>
    );
}

export default Register;