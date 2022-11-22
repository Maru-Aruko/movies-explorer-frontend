import React from "react";

import likedMovies from '../../../utils/movieLikedList'

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
    return (
        <section className="saved-movies">
            <SearchForm />
            <MoviesCardList movies={likedMovies} moreButton={false} />
        </section>
    )
}

export default SavedMovies;