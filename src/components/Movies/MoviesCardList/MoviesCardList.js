import React from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import {useLocation} from "react-router-dom";
import {
    MOVIES_CARD_AFTER_480,
    MOVIES_CARD_BEFORE_480, NEW_MOVIES_CARD_AFTER_480,
    NEW_MOVIES_CARD_BEFORE_480,
    notFoundError,
    WINDOW_WITCH_480
} from "../../../utils/constants";

function MoviesCardList({movies, savedMovies, likeMovie, deleteMovie, isLoading, isError, movieErrorText, isMovieError}) {

    const foundedMovies = JSON.parse(localStorage.getItem('foundedMovies'))
    const likedMovies = JSON.parse(localStorage.getItem('likedMovies'));
    const saveMovies = JSON.parse(localStorage.getItem('savedMovies'))
    const location = useLocation();

    const [moviesCards, setMoviesCards] = React.useState(0);
    const [moreMoviesCard, setMoreMoviesCard] = React.useState(0);
    const [windowWitch, setWindowWidth] = React.useState(window.innerWidth)

    function handleWindowResize() {
        if (location.pathname === "/movies") {
            if (windowWitch <= WINDOW_WITCH_480) {
                setMoviesCards(MOVIES_CARD_BEFORE_480);
                setMoreMoviesCard(NEW_MOVIES_CARD_BEFORE_480)
            } else if (windowWitch > WINDOW_WITCH_480) {
                setMoviesCards(MOVIES_CARD_AFTER_480);
                setMoreMoviesCard(NEW_MOVIES_CARD_AFTER_480);
            }
        }
    }

    function toggleWindowWidth() {
        setWindowWidth(windowWitch)
    }

    function savedMovie(movie) {
        return savedMovies.find(savedMovie => savedMovie.movieId === movie.id)
    }

    React.useEffect(() => {
        window.addEventListener('resize', toggleWindowWidth)
        handleWindowResize()
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [windowWitch, location])


    function handleShowMoreMovies() {
        setMoviesCards((movies) => movies + moreMoviesCard)
    }

    if (isError) {
        return <span className="search__error">{movieErrorText}</span>
    }

    if (isMovieError) {
       return <span className="movies__not-found">{notFoundError}</span>
    }


    return (
        <section className="movies-cards">
            {isLoading && <Preloader/>}
            {!isLoading && foundedMovies !== null && location.pathname === "/movies" && (
                foundedMovies.length === 0 ?
                    <span className="movies__not-found">{notFoundError}</span> :
                    <ul className="movies-cards__container">
                        {foundedMovies.slice(0, moviesCards).map((movie) => (
                            <MoviesCard movie={movie} key={movie.id || movie._id}
                                        deleteMovie={deleteMovie} likeMovie={likeMovie}
                                        liked={savedMovie(movie)} savedMovies={savedMovies}/>
                        ))
                        }
                    </ul>
            )}
            {!isLoading && movies !== null && location.pathname === "/saved-movies" && (
                    movies.length !== 0 &&
                    <ul className="movies-cards__container">
                        {movies.map((movie) => (
                            <MoviesCard movie={movie} key={movie.id || movie._id}
                                        deleteMovie={deleteMovie} likeMovie={likeMovie}
                                        liked={savedMovie(movie)} savedMovies={savedMovies}/>
                        ))
                        }
                    </ul>
            )}

            {!isLoading && foundedMovies !== null && location.pathname === "/movies" && moviesCards < foundedMovies.length &&
                <button type="button" className="movies-cards__more-button"
                        name="moreButton" onClick={handleShowMoreMovies}>
                    Ещё
                </button>
            }

        </section>
    );
}

export default MoviesCardList;