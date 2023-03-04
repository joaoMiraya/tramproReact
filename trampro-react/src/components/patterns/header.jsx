import{ React, useEffect, useState }from 'react';
import { Link } from 'react-router-dom';

import { useModal } from '../../assets/hooks/useModal';

import './stylesheets/header.css'
import { AiOutlineSearch } from 'react-icons/ai';


function Header() {

  const { openModal,  openRegisterModal, } = useModal();


  return (

    <nav className="nav">
      
         <div className="logo-nav">
        <Link to="/"><h1><i className="tram">Tram</i><b className="pro">Pro</b></h1></Link>
      </div>

      <div className="search-box">
        <form action="/search" method="GET" className="search-form">
          <div className="search-content">
            <input className="search-text" name="keywords" type="text" placeholder="Qual serviço está precisando?" />
            <button type="submit" className="search-btn"><AiOutlineSearch size={20} color="white" /></button>
          </div>
        </form>
      </div>

      <div className="ul-li-box">
        <ul>
          <li><Link className="nav-btn" to="/profile">Perfil</Link></li>
          <li><Link className="nav-btn" to="/services">Trampos</Link></li>
          <li className="nav-btn loginNav" onClick={openModal}>Entrar</li>
          <li className="registerNav" onClick={openRegisterModal}>Cadastro</li>
        </ul>
      </div>

      <div className="menu-box">
        <button  id="menu">
          <span className="linha"></span>
          <span className="linha"></span>
          <span className="linha"></span>
        </button>
      </div>
    </nav>

  );
 }

export default Header;