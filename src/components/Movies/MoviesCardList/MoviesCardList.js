import React from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList ({ movies, moreButton })  {

    const [isLoading, setLoading] = React.useState(false);

    const handlePreloader = () => {
        setLoading(true);
    };

    return (
        <section className="movies-cards">
            <ul className="movies-cards__container">
                {movies.map((movie) => (
                    <MoviesCard key={movie.id} movie={movie} />
                ))}
            </ul>
            {isLoading ? (
                <Preloader />
            ) : (
                moreButton && (
                        <button type="button" className="movies-cards__more-button"
                                name="moreButton" onClick={handlePreloader}>
                            Ещё
                        </button>
                )
            )}
        </section>
    );
}

export default MoviesCardList;