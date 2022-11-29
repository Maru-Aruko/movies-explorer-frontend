import React, {useCallback} from "react";

//хук управления формой и валидации формы
export function useFormWithValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage});
        setIsValid(target.closest("form").checkValidity());

        if (name === "name" && value !== "") {
            if (!value.match(/^[a-zA-Zа-яА-Я\s-]+$/)) {
                setIsValid(false)
                setErrors({
                    ...errors,
                    [name]: "Поле 'Имя' может содержать только латиницу, кириллицу, пробел или дефис."
                });
            }
        }
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return {values, errors, isValid, handleChange, resetForm, setIsValid};
}