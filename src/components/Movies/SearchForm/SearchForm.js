import React from "react";

function SearchForm() {

    return (
        <section className="search-form">
            <div className="search-form__container">
                <form className="search-form__form">
                    <input className="search-form__input" type="text" name="search-input"
                           placeholder="Фильм" required />
                    <button type="submit" className="search-form__button">Поиск</button>
                </form>
                <div className="search-form__short-films">
                        <input type="checkbox" id="switch" className="search-form__switcher" />
                        <label htmlFor="switch" className="search-form__label"></label>
                    <p className="search-form__short-film-text">Короткометражки</p>
                </div>
            </div>
            {/*<div className="search-form__border-bottom"></div>*/}
        </section>
    );
}

export default SearchForm;