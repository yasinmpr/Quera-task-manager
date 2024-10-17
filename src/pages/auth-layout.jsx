import { Outlet } from "react-router-dom";
import AuthNav from "../components/authNav";
import { useState } from "react";
function AuthLayout() {
    const [url, setUrl] = useState(
        window.location.href.split("/")[
            window.location.href.split("/").length - 1
        ]
    );

    const changeUrlHandler = (newUrl) => {
        setUrl(newUrl);
    };

    return (
        <>
            <div className="w-full h-full relative bg-white flex flex-col justify-center items-center ">
                <AuthNav url={url} changeUrlHandler={changeUrlHandler} />
                <div className="w-[110%] -bottom-4 h-[100%] absolute translate-y-[50%]  rotate-[-8deg] bg-gradient-to-l from-30% from-teal-700  to-sky-400 to-100%"></div>
                <Outlet context={changeUrlHandler} />
            </div>
        </>
    );
}

export default AuthLayout;
