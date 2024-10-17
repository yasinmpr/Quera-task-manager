import useInput from "../hooks/useInput";
const Signup = () => {
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
        <div className="w-[400px] h-[380px] bg-white shadow-3xl rounded-3xl z-10 flex flex-col items-center justify-around py-2">
            <h3 className="font-extrabold text-center text-2xl w-[90%] h-[20]">
                ثبت‌نام در کوئرا تسک منیجر
            </h3>

            <form
                onSubmit={onSubmitHandler}
                className=" h-[85%] w-[90%] flex flex-col items-center justify-around"
            >
                <div className="flex flex-col items-end justify-around w-full h-[20%]">
                    <label htmlFor="name">نام کامل</label>
                    <input
                        className="border border-neutral-400 rounded-md w-full h-8"
                        type="text"
                        id="name"
                    />
                </div>
                <div className="flex flex-col items-end justify-around w-full h-[20%]">
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
                <div className="flex flex-col items-end justify-around w-full h-[20%]">
                    <label htmlFor="password">رمز عبور</label>
                    <input
                        className="border border-neutral-400 rounded-md w-full h-8"
                        type="text"
                        id="password"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-teal-600 w-full py-2 text-center text-white h-[15%] flex items-center justify-center rounded-lg"
                >
                    ثبت‌نام
                </button>
            </form>
        </div>
    );
};

export default Signup;
