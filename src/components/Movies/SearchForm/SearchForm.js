import React from "react";

function SearchForm({handleSearchMovies, saveCheckboxState, saveFilmsInputInfo}) {

    const [inputValue, setInputValue] = React.useState('');
    const [shortFilmCheckbox, setShortFilmCheckbox] = React.useState(false);
    const [searchEmpty, setSearchEmpty] = React.useState(false);

    const handleChangeSearch = (e) => {
        setInputValue(e.target.value);
    }

    const handleShortFilmCheckboxChange = (e) => {
         {
            const shortFilmCheckbox = e.target.checked;
            setShortFilmCheckbox(shortFilmCheckbox)
            handleSearchMovies(inputValue, shortFilmCheckbox)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue === "" || inputValue == null) {
            setSearchEmpty(true)
        } else {
            handleSearchMovies(inputValue, shortFilmCheckbox)
            setSearchEmpty(false)
        }
    }

    React.useEffect(() => {
        setShortFilmCheckbox(saveCheckboxState);
        setInputValue(saveFilmsInputInfo);
    }, []);

    return (
        <section className="search-form">
            <div className="search-form__container">
                <form className="search-form__form" onSubmit={handleSubmit} noValidate>
                    <input className="search-form__input" value={inputValue || ''}
                           type="text" name="movieName" onChange={handleChangeSearch}
                           placeholder="Фильм" required/>
                    <button type="submit" className="search-form__button">
                        Поиск
                    </button>
                </form>
                <div className="search-form__short-films">
                    <input type="checkbox"
                           checked={shortFilmCheckbox}
                           onChange={handleShortFilmCheckboxChange}
                           id="switch" name="shortFilmsSwitcher" className="search-form__switcher"/>
                    <label htmlFor="switch" className="search-form__label"></label>
                    <p className="search-form__short-film-text">Короткометражки</p>
                    {searchEmpty &&
                        <span className="search__error">Нужно ввести ключевое слово</span>}
                </div>
            </div>
        </section>
    );
}

export default SearchForm;