import React from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useFormWithValidation} from "../Validation/Validation";

function Profile({onLogout, onUpdateUser, isEdited, isEditProfile, errorText, successText, isReturnInProfile}) {

    const currentUser = React.useContext(CurrentUserContext);

    const {resetForm, isValid, errors, values, handleChange, setIsValid} = useFormWithValidation();

    React.useEffect(() => {
        if (currentUser) {
            resetForm(currentUser, {}, true);
        }
    }, [currentUser, resetForm, isReturnInProfile]);

    const checkValidity = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser(values);
        setIsValid(false)
    }

    return (
        <section className="profile">
            <h2 className="profile__title">{`Привет, ${currentUser.name || ''}!`}</h2>
            <form className="profile__form" onSubmit={handleSubmit} noValidate>
                <label className="profile__info">
                    <span className="profile__info-text">Имя</span>
                    <input className={`profile__input ${!isValid && 'profile__name__input-error'}`}
                           name="name" required
                           value={values.name || ''}
                           minLength='2' maxLength='30' onChange={handleChange}
                           disabled={!isEdited}/>
                </label>
                <span className="input_invalid">{errors.name || ''}</span>
                <label className="profile__info">
                    <span className="profile__info-text">E-mail</span>
                    <input className={`profile__input ${!isValid && 'profile__email__input-error'}`}
                           name="email" required
                           type='email' value={values.email || ''}
                           onChange={handleChange} disabled={!isEdited}/>
                </label>
                <span className="input_invalid">{errors.email || ''}</span>
                <div className="profile__buttons">
                    {isEdited ? (
                        <>
                            <button onClick={isReturnInProfile} className="profile__return-button">К профилю</button>
                            <span className="error">{errorText}</span>
                            <button className="profile__save-button"
                                    type='submit' disabled={checkValidity}>Сохранить
                            </button>
                        </>
                    ) : (
                        <>
                            <span className="success">{successText}</span>
                            <button className="profile__edit-button" onClick={isEditProfile}>Редактировать</button>
                            <button onClick={onLogout} className="profile__signout-button">Выйти из аккаунта</button>
                        </>
                    )
                    }

                </div>
            </form>

        </section>
    )
}

export default Profile;