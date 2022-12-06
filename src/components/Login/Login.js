import React from "react";
import Form from '../Form/Form';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useFormWithValidation} from "../Validation/Validation";

function Login({onLogin, isError, errorText, resetErrorText}) {
    const currentUser = React.useContext(CurrentUserContext);

    const { isValid, errors, values, handleChange, setIsValid} = useFormWithValidation();

    const checkValidity = (!isValid);

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(values);
        setIsValid(false)
    }

    return (
        <Form handleSubmit={handleSubmit} isError={isError} errorText={errorText}
              checkValidity={checkValidity} resetErrorText={resetErrorText}
              title="Рады видеть!" buttonText="Войти"
              question="Ещё не зарегистрированы?" path="/signup" link="Регистрация">
            <label className="form__label">
                <p className="form__text">E-mail</p>
                <input type="email" className="form__input" name="email" value={values.email || ''}
                       onChange={handleChange} required/>
                <span className="input_invalid">{errors.email || ''}</span>
            </label>
            <label className="form__label">
                <p className="form__text">Пароль</p>
                <input type="password" className="form__input" name="password" value={values.password || ''}
                       onChange={handleChange} required/>
                <span className="input_invalid">{errors.password || ''}</span>
            </label>
        </Form>
    );
}

export default Login;