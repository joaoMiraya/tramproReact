import React from 'react';
import Modal from 'react-modal';

import RegisterForm from './registerForm';

import { useModal } from '../../../assets/hooks/useModal';

Modal.setAppElement('#root');

function RegisterModal() {

    const { registerModal, closeModal } = useModal();

    return (
        <Modal
            isOpen={registerModal}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            contentLabel="Exemplo de Modal"
            className="registerFormContainer"

        >
            <RegisterForm />
            
        </Modal>
    );
}

export default RegisterModal;
