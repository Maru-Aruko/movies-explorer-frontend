import React from "react";
import { Link } from "react-router-dom";

function Profile() {

    const [isEdited, setIsEdited] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});

    const handleEditProfile = (e) => {
        e.preventDefault();
        setIsEdited(!isEdited);
    };

    const [name, setName] = React.useState("");

    function handleNameInputChange(e) {
        setName(e.target.value);
    }

    const [email, setEmail] = React.useState("");

    function handleEmailInputChange(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setCurrentUser({
            ...currentUser,
            name: name,
            email: email,
        });
        setIsEdited(false);
    }

    return (
        <section className="profile">
            <h2 className="profile__title">Привет, Мария!</h2>
            <form className="profile__form" onSubmit={handleSubmit} >
                <label className="profile__info">
                    <span className="profile__info-text">Имя</span>
                    <input className="profile__input" value={name || 'Мария'} onChange={handleNameInputChange} disabled={!isEdited}/>
                </label>
                <label className="profile__info">
                    <span className="profile__info-text">E-mail</span>
                    <input className="profile__input" value={email || 'Maru.Aruko@yandex.ru'} onChange={handleEmailInputChange} />
                </label>
                <div className="profile__buttons">
                    {isEdited ? (
                            <button className="profile__save-button" type="submit">Сохранить</button>)
                        :
                        (<>
                                <button className="profile__edit-button" onClick={handleEditProfile}>Редактировать</button>
                                <Link to="/" className="profile__signout-button">Выйти из аккаунта</Link>)
                            </>
                        )
                    }
                </div>
            </form>

        </section>
    )
}

export default Profile;