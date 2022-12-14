import React from "react";
import {Link} from "react-router-dom";

function NavTab() {
    return (
        <div className="navtab__buttons">
            <Link to="/signup" className="navtab__register-button">
                Регистрация
            </Link>
            <Link to="/signin">
                <button className="navtab__login-button">Войти</button>
            </Link>
        </div>
    );
}

export default NavTab;