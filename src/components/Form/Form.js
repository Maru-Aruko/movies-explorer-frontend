import React from "react";
import {Link, useLocation} from 'react-router-dom';

import logo from '../../images/logo.svg';

function Form({title, buttonText, question, path, link, children}) {

    const location = useLocation()

    return (
        <section className="form">
            <div className="form__container">
                <Link to="/">
                    <img className="header__logo" src={logo} alt="Логотип «Movies»"/>
                </Link>
                <h2 className="form__title">{title}</h2>
                <form className="form__labels">
                    {children}
                </form>
                <div className={`form__buttons ${location.pathname === "/signin" && "form__buttons-login"}`}>
                    <button type="submit" className="form__button" disabled>
                        {buttonText}
                    </button>
                    <span className="form__question"> {question}
                        <Link to={path} className="form__link"> {link} </Link>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Form;