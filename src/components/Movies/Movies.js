import React from "react";

import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';


function Movies({
                    deleteMovie, likeMovie, savedMovies, isLoading,
                    handleSearchMovies, saveCheckboxState, saveFilmsInputInfo,
                    isError, errorText
                }) {


    return (
        <section className="movies">
            <SearchForm handleSearchMovies={handleSearchMovies}
                        saveCheckboxState={saveCheckboxState}
                        saveFilmsInputInfo={saveFilmsInputInfo}/>
            <MoviesCardList
                likeMovie={likeMovie} deleteMovie={deleteMovie}
                isLoading={isLoading} isError={isError} errorText={errorText}
                savedMovies={savedMovies}/>
        </section>
    );
}

export default Movies;