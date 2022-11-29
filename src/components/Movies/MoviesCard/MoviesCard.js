import React from "react";
import {Link, useLocation} from "react-router-dom";
import {duration} from "../../../utils/duration";

function MoviesCard({movie, liked, likeMovie, deleteMovie, savedMovies}) {

    const location = useLocation();

    function handleLikeToggle() {
        if (!liked) {
            likeMovie(movie)
        } else {
            const deletedMovie = savedMovies.find((film) => film.movieId === movie.id || movie.movieId)
            deleteMovie(deletedMovie)
        }
    }

    function handleDeleteClick() {
        deleteMovie(movie)
    }

    return (
        <li className="movie">
            <div className="movie__container">
                <p className="movie__title">{movie.nameRU}</p>
                <p className="movie__duration">{duration(movie)}</p>
                {location.pathname === "/saved-movies" ?
                    <button type="button" className="movie__button movie__delete-button"
                            onClick={handleDeleteClick}/>
                    :
                    <button type="button"
                            className={`movie__button movie__button${liked ? '_active' : '_inactive'}`}
                            onClick={handleLikeToggle}/>
                }
                <Link to={movie.trailerLink} className="movie__img-link" target="_blank">
                    <img className="movie__img"
                         src={location.pathname === '/saved-movies' ? `${movie.image}` : `https://api.nomoreparties.co${movie.image.url}`}
                         alt={movie.nameRU}>
                    </img>
                </Link>
            </div>
        </li>
    );
}

export default MoviesCard;