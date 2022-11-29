import React from "react";

function Portfolio() {
    return (
        <section className="portfolio">
            <ul className="portfolio__container">
                Портфолио
                <li className="portfolio__item">
                    <a href="https://github.com/Maru-Aruko/how-to-learn"
                        className="portfolio__link description-title"
                        target="blank">
                        Статичный сайт
                        <p className="portfolio__link-arrow"></p>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a href="https://github.com/Maru-Aruko/russian-travel"
                        className="portfolio__link description-title"
                        target="blank">
                        Адаптивный сайт
                        <p className="portfolio__link-arrow"></p>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a href="https://github.com/Maru-Aruko/react-mesto-api-full"
                        className="portfolio__link description-title"
                        target="blank">
                        Одностраничное приложение
                        <p className="portfolio__link-arrow"></p>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;