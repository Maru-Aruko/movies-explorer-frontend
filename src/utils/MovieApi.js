import {MOVIES_API} from "./constants";

class MoviesApi {
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

    //Получение фильмов
    getMovies() {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(this._checkResponse);
    }
}

export const moviesApi = new MoviesApi({
    url: MOVIES_API,
});