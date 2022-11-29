import React from "react";
import {Link, useLocation} from 'react-router-dom';

import logo from '../../images/logo.svg';

function Form({
                  title,
                  buttonText,
                  question,
                  path,
                  link,
                  handleSubmit,
                  checkValidity,
                  errorText,
                  isError,
                  resetErrorText,
                  children
              }) {

    const location = useLocation()


    return (
        <section className="form">
            <div className="form__container">
                <Link to="/">
                    <img className="header__logo" src={logo} alt="Логотип «Movies»"/>
                </Link>
                <h2 className="form__title">{title}</h2>
                <form onSubmit={handleSubmit} className="form__labels">
                    {children}
                    <div className={`form__buttons ${location.pathname === "/signin" && "form__buttons-login"}`}>
                        <span className="error">{isError ? errorText : ""}</span>
                        <button type="submit" disabled={checkValidity} className="form__button">
                            {buttonText}
                        </button>
                        <span className="form__question"> {question}
                            <Link to={path} onClick={resetErrorText} className="form__link"> {link} </Link>
                    </span>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Form;