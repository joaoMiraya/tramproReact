import React from 'react';
import axios from 'axios';
import './stylesheets/login.css';
import { useEffect, useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { initializeGoogleSignIn, renderGoogleSignInButton, displayGoogleSignInDialog } from '../../../assets/utils/googleLogin';
import { useModal } from '../../../assets/hooks/useModal';



function LoginForm() {

    const { closeModal } = useModal();

    const [userNotFound, setUserNotFound] = useState(false);

    /*  LOGIN GOOGLE */
    useEffect(() => {
        initializeGoogleSignIn();
        renderGoogleSignInButton();
        displayGoogleSignInDialog();
    }, []);



    function login(e) {
        e.preventDefault();
        const usuario = {
            email: emailLogin,
            password: passwordLogin
        }

        axios.get('http://localhost:3005/users')
            .then(response => {
                let users = response.data
                const foundUser = users.find(user => user.email === usuario.email)
                if (foundUser) {
                    console.log('Login Valido:', foundUser)
                } else {
                    // Usuário não encontrado
                    setUserNotFound(true)
                    alert('Usuario não encontrado')
                    console.log('Usuário não encontrado com o email:', userGoogle.email)
                }
            })

    }

    const [emailLogin, setEmailLogin] = useState('');
    const [emailLoginErr, setEmailLoginErr] = useState(false);

    const [passwordLogin, setPasswordLogin] = useState('');
    const [passwordLoginErr, setPasswordLoginErr] = useState(false);


    return (
        <React.Fragment>
            <div className='containerModalLogin'>

                <div className='loginFormContainer'>
                    <AiOutlineClose className='closeBtnLoginModal' onClick={closeModal} />
                    <h1>Faça seu Login</h1>

                    <div id='buttonLoginDiv'>
                        <div className='buttonLoginDiv'></div>
                    </div>

                    <div className='hrOr'>
                        <hr /> OU <hr />
                    </div>

                    <div className='formLoginBox'>
                        <form action="#">
                            <div className='emailLoginBox'>
                                <input type="email"
                                    name="loginEmail"
                                    value={emailLogin}
                                    onChange={(e) => setEmailLogin(e.target.value)}
                                    id="loginEmail"
                                    placeholder='Seu Email'
                                />
                            </div>

                            <div className='passwordLoginBox'>
                                <input type="password"
                                    name="loginPassword"
                                    value={passwordLogin}
                                    onChange={(e) => setPasswordLogin(e.target.value)}
                                    id="loginPassword"
                                    placeholder='Sua Senha'
                                />
                            </div>

                            <div className='rememberLoginBox'>
                                <input type="checkbox" name='rememberLogin' id='rememberLogin' />
                                <label htmlFor="rememberLogin">Manter acesso</label>
                            </div>

                            <div className='forgotPassBox'>
                                <button id='forgotPasswordButton' type='button'>Esqueci minha senha</button>
                            </div>

                            <div className='loginButtonBox'>
                                <button type='submit' onSubmit={login}>ENVIAR</button>
                            </div>

                        </form>
                    </div>

                    {userNotFound && <p>Usuario não encontrado</p>}
                </div>
            </div>
        </React.Fragment>

    )
}



export default LoginForm;