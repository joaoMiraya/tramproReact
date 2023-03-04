import React from 'react';

import './stylesheets/login.css';

import { FcGoogle } from 'react-icons/fc';

import LoginModal from './loginModal';





function LoginForm() {
    return (
        <React.Fragment>
           <div className='containerModalLogin'>

                <div className='loginFormContainer'>
                    <h1>Faça seu Login</h1>
                    <div className='googleLoginBox'>
                        <FcGoogle size={35} />
                        <p> Entrar com Google</p>
                    </div>

                    <div className='hrOr'>
                        <hr /> OU <hr />
                    </div>

                    <div className='formLoginBox'>
                        <form action="#">
                            <div className='emailLoginBox'>
                                <input type="text" name="loginEmail" id="loginEmail" placeholder='Seu Email' />
                            </div>

                            <div className='passwordLoginBox'>
                                <input type="password" name="loginPassword" id="loginPassword" placeholder='Sua Senha' />
                            </div>

                            <div className='rememberLoginBox'>
                                <input type="checkbox" name='rememberLogin' id='rememberLogin' />
                                <label for="rememberLogin">Manter acesso</label>
                            </div>

                            <div className='forgotPassBox'>
                                <button id='forgotPasswordButton' type='button'>Esqueci minha senha</button>
                            </div>

                            <div className='loginButtonBox'>
                                <button type='submit'>ENVIAR</button>
                            </div>

                        </form>


                    </div>

                </div>
                </div>
        </React.Fragment>

    )
}



export default LoginForm;