import React from "react";

import './stylesheets/login.css';

import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

function Login() {
    return (
        <React.Fragment>
            <div className="containerLoginMain">

                <div className="registerBox">
                    < RegisterForm />
                </div>


            </div>
        </React.Fragment>

    )
}

export default Login