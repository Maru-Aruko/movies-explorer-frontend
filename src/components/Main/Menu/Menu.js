import React from "react";
import {NavLink} from "react-router-dom";

function Menu({isOpen, onMenuClick}) {
    return (
        <div className={`menu ${isOpen ? "menu_opened" : "menu_hidden"}`}>
            <div className="menu__container">
                <button className="menu__close-button" type="button" onClick={onMenuClick}></button>
                <NavLink exact to="/" className="navigation__films-link menu__link"
                         activeClassName="menu__link_active" onClick={onMenuClick}>
                    Главная
                </NavLink>
                <NavLink exact to="/movies" className="navigation__films-link menu__link"
                         activeClassName="menu__link_active" onClick={onMenuClick}>
                    Фильмы
                </NavLink>
                <NavLink exact to="/saved-movies" className="navigation__films-link menu__link"
                         activeClassName="menu__link_active" onClick={onMenuClick}>
                    Сохранённые фильмы
                </NavLink>
                <div className="navigation__account menu__account">
                    <NavLink exact to="/profile" className="navigation__account-link"
                             activeClassName="menu__link_active" onClick={onMenuClick}>
                        Аккаунт
                    </NavLink>
                    <div className="navigation__account-image"></div>
                </div>
            </div>
        </div>
    )
}

export default Menu;