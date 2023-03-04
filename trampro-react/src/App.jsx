
import './App.css';
import { Outlet } from 'react-router-dom'; 
import { useModal } from "./assets/hooks/useModal";
import RegisterModal from './components/pages/login/registerModal';
import LoginModal from './components/pages/login/loginModal';

import Header from './components/patterns/header';
import Footer from './components/patterns/footer';


function App() {

  const {modal, registerModal} = useModal();

  return (

    <div className="App">
            {modal && <LoginModal />}
            {registerModal && <RegisterModal />}
      <Header />
      <Outlet />
       <Footer />
    </div>

  )
}

export default App
