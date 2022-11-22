import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__collaboration">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className="footer__container">
                <p className="footer__year">&copy; 2022</p>
                <div className="footer__links">
                    <a href="https://practicum.yandex.ru" className="footer__link" target="blank">
                        Яндекс.Практикум
                    </a>
                    <a href="https://github.com" className="footer__link" target="blank">
                        Github
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;