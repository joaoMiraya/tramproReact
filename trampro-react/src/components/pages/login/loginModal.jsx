import React from 'react';
import Modal from 'react-modal';


import LoginForm from './loginForm';

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
            <LoginForm />
        </Modal>
    );
}

export default LoginModal;
