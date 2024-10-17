import { NavLink } from "react-router-dom";

const AuthNav = ({ url, changeUrlHandler }) => {
    return (
        <>
            <nav className="w-full h-16 flex flex-row-reverse justify-between px-24 items-center  absolute top-5 p-5">
                <h2 className="font-extrabold text-2xl text-center bg-gradient-to-r from-teal-600 to-cyan-500 text-transparent bg-clip-text">
                    کوئرا تسک منیجر
                </h2>
                <div className="flex flex-row-reverse justify-evenly items-center font-normal">
                    <p className="text-sm">
                        {url === "signup"
                            ? "قبلا ثبت‌نام کرده‌ای؟"
                            : "ثبت‌نام نکرده‌ای؟"}
                    </p>
                    <div className="py-1 px-4 flex items-center justify-center text-white bg-teal-600 rounded mr-2">
                        <NavLink
                            to={url === "signup" ? "/login" : "/signup"}
                            className="text-sm"
                            onClick={() => {
                                if (url === "signup") {
                                    changeUrlHandler("login");
                                } else {
                                    changeUrlHandler("signup");
                                }
                            }}
                        >
                            {url === "signup" ? "ورود" : "ثبت‌نام"}
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AuthNav;
