import React from "react";

import movies from '../../utils/moviesList';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';


function Movies() {
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList
                movies={movies}
                moreButton={true} />
        </section>
    );
}

export default Movies;