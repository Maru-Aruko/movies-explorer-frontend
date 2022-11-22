import React from 'react';
import Form from '../Form/Form';

function Register() {
    return (
        <Form title="Добро пожаловать!" buttonText="Зарегистрироваться" question="Уже зарегистрированы?" path="/signin" link="Войти" >
            <label className="form__label">
                <span className="form__text">Имя</span>
                <input type="text" className="form__input" placeholder="Мария" required />
                <span className="form__error">Что-то пошло не так...</span>
            </label>
            <label className="form__label">
                <span className="form__text">E-mail</span>
                <input type="email" className="form__input" placeholder="Maru.Aruko@yandex.ru" required />
                <span className="form__error">Что-то пошло не так...</span>
            </label>
            <label className="form__label">
                <p className="form__text">Пароль</p>
                <input type="password" className="form__input" placeholder="••••••••••••••" required />
                <span className="form__error">Что-то пошло не так...</span>
            </label>
        </Form>
    );
}

export default Register;