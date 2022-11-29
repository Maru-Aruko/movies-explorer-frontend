import React from "react";
import avatar from "../../../images/Maria.jpg";

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title title">Студент</h2>
            <div className="about-me__container">
                <h3 className="about-me__name description-title">Мария</h3>
            <div className="about-me__description">
            <h4 className="about-me__job">Фронтенд-разработчик, 22 года</h4>
            <p className="about-me__biography">
                Я родилась и живу в Саратове, закончила психолого-педагогический факультет СГУ,
                но решила сменить род деятельности и начала заниматься программированием.
                Люблю петь, играть на гитаре, рисовать и писать стихи. Обожаю животных и молочный шоколад:) Планирую и дальше развиваться в сфере веб-разработки.
            </p>
            <a href="https://github.com/Maru-Aruko" className="about-me__github" target="blank">
                Github
            </a>
            </div>
                <img src={avatar} alt="Студент" className="about-me__avatar" />
            </div>
        </section>
    );
}

export default AboutMe;