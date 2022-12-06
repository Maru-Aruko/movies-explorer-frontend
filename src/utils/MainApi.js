import {MAIN_API} from "./constants";

class MainApi {
    constructor({url}) {
        this._url = url;
    }

    //Проверка ответа
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
    }

//Загрузка информации о пользователе с сервера
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            credentials: 'include',
        })
            .then(this._checkResponse)
    }

    //Редактирование профиля
    setProfile(data) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data["name"],
                email: data["email"]
            })
        })
            .then(this._checkResponse)
    }

    //Получение фильмов
    getMovies() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(this._checkResponse);
    }

    // Добавление нового фильма
    addNewMovie(newMovie) {
        return fetch(`${this._url}/movies`, {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: newMovie.country,
                director: newMovie.director,
                duration: newMovie.duration,
                year: newMovie.year,
                description: newMovie.description,
                image: (`https://api.nomoreparties.co${newMovie.image.url}`),
                trailerLink: newMovie.trailerLink,
                thumbnail: (`https://api.nomoreparties.co${newMovie.image.formats.thumbnail.url}`),
                movieId: newMovie.id.toString(),
                nameRU: newMovie.nameRU,
                nameEN: newMovie.nameEN,
            })
        })
            .then(this._checkResponse)
    }

//Удаление фильма
    removeMovie(id) {
        return fetch(`${this._url}/movies/${id}`, {
            method: "DELETE",
            credentials: 'include',
        })
            .then(this._checkResponse)
    }

    //Регистрация
    register(data) {
        return fetch(`${this._url}/signup`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password,
            })
        })
            .then(this._checkResponse)
    }

    //Авторизация
    authorize(data) {
        return fetch(`${this._url}/signin`, {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            })
        })
            .then(this._checkResponse)
    }

    //Проверка валидности токена
    checkToken() {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        }).then(this._checkResponse);
    };

}

export const mainApi = new MainApi({
    url: MAIN_API,
});
