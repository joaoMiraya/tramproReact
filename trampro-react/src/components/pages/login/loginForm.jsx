import React from 'react';

import './stylesheets/login.css';

function LoginForm() {
    return (
        <React.Fragment>
            <div className='loginFormContainer'>
            <fieldset>
                <legend>Faça seu Login</legend>
                <form action="#">
                    <div className='emailLoginBox'>
                        <label for="loginEmail">Email: </label> <br />
                        <input type="text" name="loginEmail" id="loginEmail" />
                    </div>

                    <div className='passwordLoginBox'>
                        <label for="loginPassword">Senha: </label> <br />
                        <input type="password" name="loginPassword" id="loginPassword" />
                    </div>

                </form>
                <div className='forgotPassBox'>
                <button type='button'>Esqueci minha senha</button>
                </div>
                </fieldset>
            </div>
        </React.Fragment>

    )
}



export default LoginForm;