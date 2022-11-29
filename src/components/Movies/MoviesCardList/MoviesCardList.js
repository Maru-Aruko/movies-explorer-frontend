import React from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import {useLocation} from "react-router-dom";
import {notFoundError} from "../../../utils/constants";

function MoviesCardList({movies, savedMovies, likeMovie, deleteMovie, isLoading, isError, errorText}) {

    const foundedMovies = JSON.parse(localStorage.getItem('foundedMovies'))
    const likedMovies = JSON.parse(localStorage.getItem('likedMovies'));
    const location = useLocation();

    const [moviesCards, setMoviesCards] = React.useState(0);
    const [moreMoviesCard, setMoreMoviesCard] = React.useState(0);
    const [windowWitch, setWindowWidth] = React.useState(window.innerWidth)

    function handleWindowResize() {
        if (location.pathname === "/movies") {
            if (windowWitch <= 480) {
                setMoviesCards(5);
                setMoreMoviesCard(2)
            } else if (windowWitch > 480) {
                setMoviesCards(7);
                setMoreMoviesCard(7);
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
        return <span className="search__error">{errorText}</span>
    }

    return (
        <section className="movies-cards">
            {isLoading && <Preloader/>}
            {!isLoading && foundedMovies !== null && (
                foundedMovies.length === 0  ?
                    <span className="movies__not-found">{notFoundError}</span> :
                    <ul className="movies-cards__container">
                        {location.pathname === "/movies" ? foundedMovies.slice(0, moviesCards).map((movie) => (
                            <MoviesCard movie={movie} key={movie.id || movie._id}
                                        deleteMovie={deleteMovie} likeMovie={likeMovie}
                                        liked={savedMovie(movie)} savedMovies={savedMovies}/>
                        )) : likedMovies !== null &&
                            likedMovies.length === 0 ?
                                <span className="movies__not-found">{notFoundError}</span>
                                :
                            movies.map((movie) => (
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