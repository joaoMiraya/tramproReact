import React from 'react';
import Modal from 'react-modal';

import { FcGoogle } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';

import { useModal } from '../../../assets/hooks/useModal';

Modal.setAppElement('#root');

function LoginModal() {

    const { modal, closeModal } = useModal();

    return (
        <Modal
            isOpen={modal}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            contentLabel="Exemplo de Modal"
            className="loginFormContainer"

        >


            <div className='containerModalLogin'>

                <div  className='loginFormContainer'>
                    <AiOutlineClose className='closeBtnLoginModal'onClick={closeModal} />
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



        </Modal>
    );
}

export default LoginModal;
