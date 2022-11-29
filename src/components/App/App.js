import React, {useState} from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound"

import './App.css';
import {Switch, Route} from "react-router-dom";

function App() {
    const routesWithHeader = [
        "/",
        "/movies",
        "/saved-movies",
        "/profile"
    ]
    const routesWithFooter = [
        "/",
        "/movies",
        "/saved-movies"
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenuClick() {
        setIsMenuOpen((!isMenuOpen));
    }

    return (
        <div className="app">
            <Route exact path={routesWithHeader}>
                <Header onMenuClick={toggleMenuClick} isOpen={isMenuOpen}/>
            </Route>
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/movies">
                    <Movies/>
                </Route>
                <Route path="/saved-movies">
                    <SavedMovies/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/signup">
                    <Register/>
                </Route>
                <Route path="/signin">
                    <Login/>
                </Route>
                  <Route path="*">
                    <NotFound />
                  </Route>
            </Switch>
            <Route exact path={routesWithFooter}>
                <Footer/>
            </Route>
        </div>
    );
}

export default App;
