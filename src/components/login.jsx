import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useOutletContext } from "react-router-dom";

function Login() {
    const changeUrlHandler = useOutletContext();

    const {
        value: email,
        hasError: emailHasError,
        isValid: emailIsValid,
        inputChangeHandler: emailChangeHandler,
        emailBlurHandler: emailBlurHandler,
        reset: emailReset,
    } = useInput((value) => value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g));
    // const {
    //     password,
    //     passwordHasError,
    //     passwordIsValid,
    //     passwordChangeHandler,
    //     passwordBlurHandler,
    //     passwordReset,
    // } = useInput();
    const formIsValid = emailIsValid;
    const formHasError = emailHasError;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(email);
        if (formIsValid && !formHasError) {
            emailReset();
            return;
        }

        console.log("Error");
    };
    return (
        <div className="w-[475px] h-[365px] bg-white shadow-3xl rounded-3xl z-10 flex flex-col items-center justify-around py-2">
            <h3 className="font-extrabold text-center text-2xl w-[90%] h-[20]">
                (: به کوئرا تسک منیجر خوش برگشتی
            </h3>

            <form
                onSubmit={onSubmitHandler}
                className=" h-[65%] w-[90%] flex flex-col items-center justify-around"
            >
                <div className="flex flex-col items-end justify-around w-full h-[30%]">
                    <label htmlFor="email">ایمیل</label>
                    <input
                        type="text"
                        id="email"
                        className="border border-neutral-400 rounded-md w-full h-8 px-3"
                        value={email}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                    />
                </div>
                <div className="flex flex-col items-end justify-around w-full h-[40%]">
                    <label htmlFor="password">رمز عبور</label>
                    <input
                        className="border border-neutral-400 rounded-md w-full h-8"
                        type="text"
                        id="password"
                    />
                    <Link
                        className="font-extrabold text-sm text-teal-600"
                        to="/forget"
                    >
                        رمز عبور را فراموش کرده‌ای؟
                    </Link>
                </div>
                <button
                    type="submit"
                    className="bg-teal-600 w-full py-2 text-center text-white h-[15%] flex items-center justify-center rounded-lg"
                >
                    ورود
                </button>
            </form>
            <div className="flex flex-row-reverse justify-center items-center h-[10%]">
                <p className="m-2">ثبت‌نام نکرده‌ای؟</p>
                <Link
                    to="/signup"
                    className="text-teal-600"
                    onClick={() => {
                        changeUrlHandler("signup");
                    }}
                >
                    ثبت‌نام
                </Link>
            </div>
        </div>
    );
}

export default Login;
