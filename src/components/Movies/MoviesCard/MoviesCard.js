import React from "react";
import {useLocation} from "react-router-dom";

function MoviesCard ({ movie }) {
    const location = useLocation();

    const [like, setLike] = React.useState(false);

    function handleLikeClick() {
        setLike(!like);
    }

    return (
        <li className="movie">
            <div className="movie__container">
                <p className="movie__title">{movie.title}</p>
                <p className="movie__duration">{movie.duration}</p>
                    {location.pathname === '/saved-movies' ? (
                        <button type="button" className="movie__button movie__delete-button" />
                    ) : (
                        <button type="button"
                                className={`movie__button movie__button${like ? '_active' : '_inactive'}`}
                            onClick={handleLikeClick}/>
                    )}
                <img src={movie.img} alt={movie.title} className="movie__img"></img>
            </div>
        </li>
    );
}

export default MoviesCard;