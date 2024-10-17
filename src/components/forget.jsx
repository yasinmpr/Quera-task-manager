import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const navigate = useNavigate();
    const {
        value: email,
        hasError: emailHasError,
        isValid: emailIsValid,
        inputChangeHandler: emailChangeHandler,
        emailBlurHandler: emailBlurHandler,
        reset: emailReset,
    } = useInput((value) => value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g));

    const formIsValid = emailIsValid;
    const formHasError = emailHasError;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(email);
        if (formIsValid && !formHasError) {
            emailReset();
            navigate("/reset");
            return;
        }

        console.log("Error");
    };
    return (
        <div className="w-[400px] h-[220px] bg-white shadow-3xl rounded-3xl z-10 flex flex-col items-center justify-around py-2">
            <h3 className="font-extrabold text-center text-2xl w-[90%] h-[20]">
                فراموشی رمز عبور
            </h3>

            <form
                onSubmit={onSubmitHandler}
                className=" h-[65%] w-[90%] flex flex-col items-center justify-around"
            >
                <div className="flex flex-col items-end justify-around w-full h-[45%]">
                    <label htmlFor="email">ایمیل خود را وارد کنید</label>
                    <input
                        type="text"
                        id="email"
                        className="border border-neutral-400 rounded-md w-full h-8 px-3"
                        value={email}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-teal-600 w-full py-2 text-center text-white h-[35%] flex items-center justify-center rounded-lg"
                >
                    دریافت ایمیل بازیابی رمز عبور
                </button>
            </form>
        </div>
    );
};

export default ForgetPassword;
