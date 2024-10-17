import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "./pages/auth-layout";
import Login from "./components/login";
import Signup from "./components/signup";
import ForgetPassword from "./components/forget";
import ResetPassword from "./components/reset";

function App() {
    return (
        <Routes>
            {/* <Route path="/"  /> */}
            <Route path="/" element={<AuthLayout />}>
                <Route path="/" element={<Navigate to='/login' />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {<Route path="forget" element={<ForgetPassword />} />}
                {<Route path="reset" element={<ResetPassword />} />}
            </Route>
        </Routes>
    );
}

export default App;
