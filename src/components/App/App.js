import React, {useEffect, useState} from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound"

import {mainApi} from "../../utils/MainApi";
import {moviesApi} from "../../utils/MovieApi"

import {CurrentUserContext} from "../../contexts/CurrentUserContext"

import './App.css';
import {Switch, Route, useHistory, useLocation, Redirect} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
    emailError, loginError, loginOrPasswordError, moviesError, notFoundError,
    pageNotFoundError,
    registerError,
    serverError, SHORT_FILM_DURATION,
    updateProfileError,
    updateSuccessful
} from "../../utils/constants";

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

    const history = useHistory()
    const location = useLocation()
    const [currentUser, setCurrentUser] = React.useState({});
    const [isError, setIsError] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEdited, setIsEdited] = React.useState(false);
    const [errorText, setErrorText] = React.useState("");
    const [movieErrorText, setMovieErrorText] = React.useState("");
    const [isMovieError, setIsMovieError] = React.useState(false);
    const [successText, setSuccessText] = React.useState("");

    const [savedMovies, setSavedMovies] = React.useState([]);
    const [likedMovies, setLikedMovies] = React.useState([])
    const [isLoading, setLoading] = React.useState(false);

    const saveMovies = JSON.parse(localStorage.getItem('savedMovies'))
    const likeMovies = JSON.parse(localStorage.getItem('likedMovies'))

    function toggleMenuClick() {
        setIsMenuOpen((!isMenuOpen));
    }

    const handleEditProfile = (e) => {
        e.preventDefault();
        setIsEdited(!isEdited);
    };

    const handleReturnInProfile = (e) => {
        handleEditProfile(e)
        resetErrorText();
    }

    function resetErrorText() {
        setErrorText("");
    }

    function searchMovie(inputValue, shortFilmCheckbox) {
        setLoading(true)
        moviesApi.getMovies()
            .then((movies) => {
                const searchedMovies = movies.filter((movie) => movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()))
                const foundedMovies = shortFilmCheckbox ? searchedMovies.filter((item) => item.duration <= SHORT_FILM_DURATION) : searchedMovies
                localStorage.setItem('foundedMovies', JSON.stringify(foundedMovies))
                localStorage.setItem('saveFilmsInputInfo', inputValue)
                localStorage.setItem('saveCheckboxState', shortFilmCheckbox)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err.message)
                setLoading(false)
                setIsError(true)
                if (err === "Error: 500") {
                    setMovieErrorText(moviesError);
                }
            })
    }

    function handleSearchMovie(inputValue, shortFilmCheckbox) {
        searchMovie(inputValue, shortFilmCheckbox)
    }

    function handleLikedMoviesSearch(inputValue, shortFilmCheckbox) {
        const searchedMovies = savedMovies.filter((movie) => movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()))
        const foundedLikedMovies = shortFilmCheckbox ? searchedMovies.filter((item) => item.duration <= SHORT_FILM_DURATION) : searchedMovies
        setLikedMovies(foundedLikedMovies)
        localStorage.setItem('likedMovies', JSON.stringify(foundedLikedMovies))
       if (likeMovies.length === 0) {
           setIsMovieError(true)
       }
    }

    function getSavedMovies() {
        mainApi.getMovies()
            .then((likedMovies) => {
                setSavedMovies(likedMovies)
                localStorage.setItem('savedMovies', JSON.stringify(likedMovies))
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleLikeMovie(movie) {
        mainApi.addNewMovie(movie)
            .then((likedMovie) => {
                setLikedMovies([likedMovie, ...likedMovies]);
                console.log("add")
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleDeleteMovie(movie) {
        mainApi.removeMovie(movie._id)
            .then(() => {
                const newMovies = savedMovies.filter((film) => film._id !== movie._id);
                setLikedMovies(newMovies)
                console.log("delete")
            })
            .catch((err) => {
                console.log(err);
            });
    }


    function handleRegister(data) {
        mainApi.register(data)
            .then(() => {
                handleLogin(data)

            })
            .catch((err) => {
                console.log(err);
                setIsError(true);
                switch (err) {
                    case ("Error: 409") : {
                        setErrorText(emailError);
                        break;
                    }
                    case ("Error: 500") : {
                        setErrorText(serverError);
                        break;
                    }
                    case ("Error: 404") : {
                        setErrorText(pageNotFoundError);
                        break;
                    }
                    default:
                        setErrorText(registerError)
                }
            })

    }

    React.useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            checkToken();
        }
    }, [checkToken]);

    function handleLogin(data) {
        mainApi.authorize(data)
            .then((newData) => {
                localStorage.setItem('jwt', newData["token"]);
                checkToken()
                history.push('/movies')
            })
            .catch((err) => {
                console.log(err);
                setIsError(true);
                switch (err) {
                    case ("Error: 401") : {
                        setErrorText(loginOrPasswordError);
                        break;
                    }
                    case ("Error: 500") : {
                        setErrorText(serverError);
                        break;
                    }
                    default:
                        setErrorText(loginError)
                }
            })
    }

    function checkToken() {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            mainApi.checkToken()
                .then(() => {
                    setLoggedIn(true);
                })
                .catch(err => console.log(err));
        }
        else {
            setLoggedIn(false)
            localStorage.removeItem("jwt");
            localStorage.removeItem('foundedMovies')
            localStorage.removeItem('saveFilmsInputInfo')
            localStorage.removeItem('saveCheckboxState')
            localStorage.removeItem('likedMovies')
            localStorage.removeItem('savedMovies')
            setLikedMovies([])
            setSavedMovies([])
        }
    }

    function handleLogout() {
        setLoggedIn(false);
        localStorage.removeItem("jwt");
        localStorage.removeItem('foundedMovies')
        localStorage.removeItem('saveFilmsInputInfo')
        localStorage.removeItem('saveCheckboxState')
        localStorage.removeItem('likedMovies')
        localStorage.removeItem('savedMovies')
        setCurrentUser({})
        setLikedMovies([])
        setSavedMovies([])
        history.push("/");
    }

    function getUserInfo() {
        mainApi.getUserInfo()
            .then((data) => {
                setCurrentUser(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    React.useEffect(() => {
        getUserInfo();
        getSavedMovies()
        setLikedMovies(saveMovies)
    }, [loggedIn, location]);


    useEffect(() => {
        if (location.pathname !== "/profile") {
            setSuccessText("");
        }
    })

    function handleUpdateUser(data) {
        mainApi.setProfile(data)
            .then((dataUser) => {
                setCurrentUser({
                    ...currentUser,
                    name: dataUser.name,
                    email: dataUser.email,
                });
                setIsEdited(false);
                setSuccessText(updateSuccessful);
            })
            .catch((err) => {
                console.error(err);
                switch (err) {
                    case ("Error: 409") : {
                        setErrorText(emailError);
                        break;
                    }
                    case ("Error: 500") : {
                        setErrorText(serverError);
                        break;
                    }
                    case ("Error: 404") : {
                        setErrorText(pageNotFoundError);
                        break;
                    }
                    default:
                        setErrorText(updateProfileError)
                }

            })
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="app">
                <Route exact path={routesWithHeader}>
                    <Header loggedIn={loggedIn} onMenuClick={toggleMenuClick} isOpen={isMenuOpen}/>
                </Route>
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>

                    <ProtectedRoute path="/movies"
                                    component={Movies} loggedIn={loggedIn} isLoading={isLoading}
                                    handleSearchMovies={handleSearchMovie}
                                    saveCheckboxState={JSON.parse(localStorage.getItem('saveCheckboxState')) || false}
                                    saveFilmsInputInfo={localStorage.getItem('saveFilmsInputInfo')}
                                    isError={isError} errorText={movieErrorText} likeMovie={handleLikeMovie}
                                    deleteMovie={handleDeleteMovie} savedMovies={likedMovies}
                    />
                    <ProtectedRoute path="/saved-movies" component={SavedMovies} loggedIn={loggedIn}
                                    isLoading={isLoading} savedMovies={savedMovies}
                                    deleteMovie={handleDeleteMovie} handleSearch={handleLikedMoviesSearch}
                                    likedMovies={likedMovies} isMovieError={isMovieError}
                    />
                    <ProtectedRoute path="/profile" component={Profile}
                                    onLogout={handleLogout} loggedIn={loggedIn} onUpdateUser={handleUpdateUser}
                                    isEdited={isEdited} isEditProfile={handleEditProfile}
                                    errorText={errorText} successText={successText}
                                    isReturnInProfile={handleReturnInProfile}/>

                    <Route path="/signup">
                        {loggedIn && <Redirect to="/movies" /> }
                        <Register onRegister={handleRegister} isError={isError} errorText={errorText}
                                  resetErrorText={resetErrorText}/>
                    </Route>
                    <Route path="/signin">
                        {loggedIn && <Redirect to="/movies" /> }
                        <Login onLogin={handleLogin} isError={isError} errorText={errorText}
                               resetErrorText={resetErrorText}/>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
                <Route exact path={routesWithFooter}>
                    <Footer/>
                </Route>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
