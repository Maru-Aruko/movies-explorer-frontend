import React from "react";
import {Link} from 'react-router-dom';

function NotFound() {
    return (
        <div className="not-found">
            <h2 className="not-found__title">404</h2>
            <span className="not-found__text">Страница не найдена</span>
            <Link to="/" className="not-found__link">Назад</Link>
        </div>
    );
}

export default NotFound;