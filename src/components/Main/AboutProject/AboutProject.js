import React from "react";

function AboutProject() {
    return (
        <section className="about-project">
            <h2 className="about-project__title title">О проекте</h2>
            <div className="about-project__container">
                <div className="about-project__description">
                    <h3 className="about-project__description-title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="about-project__description-subtitle">
                        Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about-project__description">
                    <h3 className="about-project__description-title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="about-project__description-subtitle">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                        соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="about-project__time">
                <div className="about-project__time-interval">
                    <p className="about-project__time-backend">1 неделя</p>
                    <p className="about-project__time-text">Back-end</p>
                </div>
                <div className="about-project__time-interval">
                    <p className="about-project__time-frontend">4 недели</p>
                    <p className="about-project__time-text">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;