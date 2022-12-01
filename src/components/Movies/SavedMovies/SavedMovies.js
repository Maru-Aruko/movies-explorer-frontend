import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies( {savedMovies, deleteMovie, likedMovies, handleSearch, isMovieError} ) {

    return (
        <section className="saved-movies">
            <SearchForm handleSearchMovies={handleSearch}
                        saveCheckboxState={false}
            />
            <MoviesCardList movies={likedMovies} savedMovies={savedMovies} deleteMovie={deleteMovie} isMovieError={isMovieError} />
        </section>
    )
}

export default SavedMovies;