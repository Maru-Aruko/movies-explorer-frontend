import React from "react";
import Form from '../Form/Form';

function Login() {
    return (
        <Form title="Рады видеть!" buttonText="Войти" question="Ещё не зарегистрированы?" path="/signup" link="Регистрация" >
            <label className="form__label">
                <p className="form__text">E-mail</p>
                <input type="email" className="form__input" required />
                <span className="form__error">Что-то пошло не так...</span>
            </label>
            <label className="form__label">
                <p className="form__text">Пароль</p>
                <input type="password" className="form__input"  required />
                <span className="form__error">Что-то пошло не так...</span>
            </label>
        </Form>
    );
}

export default Login;