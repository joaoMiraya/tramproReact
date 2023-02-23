import React from "react";
import { Link } from "react-router-dom";
import './stylesheets/profile.css'

import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineCamera } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';


function FirstViewPort() {

    function activeAtivosTrampo() {
        const ativosOption = document.getElementById('ativosOption');
        const contratadosOption = document.getElementById('contratadosOption');
        contratadosOption.classList.remove('active')
        ativosOption.classList.toggle('active')
    }

    function activeTrampoContratado() {
        const contratadosOption = document.getElementById('contratadosOption');
        const ativosOption = document.getElementById('ativosOption');
        ativosOption.classList.remove('active')
        contratadosOption.classList.toggle('active')

    }

    return (
        <React.Fragment>

            <div className="mainContainer">


                <div className="perfil-container">

                    <div className="edit-icon">
                        <Link to="/profile/formEdit/">< AiOutlineEdit className="editService" size={25} /></Link>
                    </div>


                    <form action="#" method="POST" encType="multipart/form-data">
                        <div className="foto-container">
                            <img className="imagemUser" src="#" alt="imagem-do-usuario" />
                            <input type="file" style={{ display: 'none' }} name="inputAvatar" id="inputAvatar" />
                            <label className="addFotoLabel" for="inputAvatar">
                                <AiOutlineCamera size={120} />
                            </label>
                        </div>

                        <div className="enviarBtnBox">
                            <button className="enviarBtn" type="submit">SALVAR</button>
                        </div>
                    </form>


                    <h2 id="nome">
                        {/*   userLogged.nome + ' ' + userLogged.sobrenome */}
                    </h2>
                    <p id="cidade">
                        {/*  userLogged.cidade  */}
                    </p>
                </div>

                <div className="trampo-container">
                    <div className="nav-trampos">
                        <div id="ativosOption" className="trampo-option active">
                            <button  onClick={activeAtivosTrampo} >TRAMPOS ATIVOS</button>
                        </div>

                        <div id="contratadosOption" className="trampo-option ">
                            <button onClick={activeTrampoContratado} >TRAMPOS CONTRATADOS</button>
                        </div>
                    </div>

                    <div className="cards-box">

                        <div className="card-addTrampo">
                            <p>ADICIONAR TRAMPO</p>
                          <Link to={'/profile/newService'}><IoMdAddCircle className="addTrampo-icon" /></Link>
                        </div>
                    </div>

                </div>

            </div>
        </React.Fragment>

    )

}

export default FirstViewPort;