import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies( {savedMovies, deleteMovie, likedMovies, handleSearch} ) {

    return (
        <section className="saved-movies">
            <SearchForm handleSearchMovies={handleSearch}
                        saveCheckboxState={JSON.parse(localStorage.getItem('saveLikeCheckboxState')) || false}
                        saveFilmsInputInfo={localStorage.getItem('saveLikeFilmsInputInfo')}
            />
            <MoviesCardList movies={likedMovies} savedMovies={savedMovies} deleteMovie={deleteMovie}  />
        </section>
    )
}

export default SavedMovies;