const ResetPassword = () => {
    return (
        <div className="w-[500px] h-[150px] bg-white shadow-3xl rounded-3xl z-10 flex flex-col items-center justify-around py-2">
            <h3 className="font-extrabold text-center text-2xl w-[90%] h-[20]">
                فراموشی رمز عبور
            </h3>

            <p className="w-[90%] h-[30%] text-sm text-right text-wrap">
                لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی
                کنید
            </p>
        </div>
    );
};

export default ResetPassword;
