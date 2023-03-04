import React from "react";

import { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export function UpdateModal( { children }) {
  
                  /* LOGIN MODAL */
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    console.log('closeModal');
    setModal(false);
  };
                      /* REGISTER MODAL */
  const [registerModal, setRegisterModal] = useState(false);


  const openRegisterModal = () => {
    console.log('openRegisterModal');
    setRegisterModal(true);
  };

  const closeRegisterModal = () => {
    console.log('closeModal');
    setRegisterModal(false);
  };
 
  return <ModalContext.Provider value={{ modal, openModal, closeModal, registerModal, openRegisterModal, closeRegisterModal }} >
            {children}
     </ModalContext.Provider>
}
export function useModal() {
  const context = useContext(ModalContext);
  return context;
}