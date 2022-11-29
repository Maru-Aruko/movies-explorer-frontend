import React from "react";
import {Link, Route, useLocation} from "react-router-dom";
import NavTab from "../Main/NavTab/NavTab";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import Menu from "../Main/Menu/Menu";

function Header({ loggedIn, isOpen, onMenuClick }) {
    const location = useLocation()
    const menuEndpoints = ["/movies", "/saved-movies", "/profile"];
    return (
          <header className={`header ${location.pathname === "/" && "header__main"}`}>
            <Link to="/">
                <img className="header__logo" src={logo} alt="Логотип «Movies»"/>
            </Link>
            <Route exact path="/">
                {loggedIn ? (
                    <Navigation onMenuClick={onMenuClick} isOpen={isOpen}/>
                ) : (
                    <NavTab />
                )}
            </Route>
            <Route path={menuEndpoints}>
                <Menu isOpen={isOpen} onMenuClick={onMenuClick} />
            </Route>
            <Route path="/movies">
                <Navigation onMenuClick={onMenuClick} isOpen={isOpen} />
            </Route>
            <Route path="/saved-movies">
                <Navigation onMenuClick={onMenuClick} isOpen={isOpen} />
            </Route>
            <Route path="/profile">
                <Navigation onMenuClick={onMenuClick} isOpen={isOpen} />
            </Route>
        </header>
    )
}

export default Header;
