import { useState } from "react";

const useInput = (validation) => {
    const [value, setValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validation(value);

    const hasError = !isValid && isTouched;

    const inputChangeHandler = (e) => {
        setValue(e.target.value);
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setValue("");
        setIsTouched(false);
    };

    return {
        value,
        hasError,
        isValid,
        inputChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;
