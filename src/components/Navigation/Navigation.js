import React from "react";
import menu from "../../images/burger.svg";
import {NavLink} from "react-router-dom";

function Navigation({onMenuClick}) {
    return (
        <>
            <nav className="navigation">
                <div className="navigation__films">
                    <NavLink exact to="/movies" className="navigation__films-link"
                             activeClassName="navigation__link_active">
                        Фильмы
                    </NavLink>
                    <NavLink exact to="/saved-movies" className="navigation__films-link"
                             activeClassName="navigation__link_active">
                        Сохранённые фильмы
                    </NavLink>
                </div>
                <div className="navigation__account">
                    <NavLink exact to="/profile" className="navigation__account-link"
                             activeClassName="navigation__link_active">
                        Аккаунт
                    </NavLink>
                    <div className="navigation__account-image"></div>
                </div>
            </nav>
            <img className="navigation__menu" src={menu} alt="Меню" onClick={onMenuClick}/>
        </>
    )
}

export default Navigation;
