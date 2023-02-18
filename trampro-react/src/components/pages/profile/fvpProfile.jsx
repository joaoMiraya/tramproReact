import React from "react";
import { Link } from "react-router-dom";
import './stylesheets/profile.css'

import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';


function FirstViewPort() {
    return (
        <React.Fragment>

            <div className="paiDeTodos">

                <div className="trampo-container">
                    <div className="trampoBox">
                        <h1 className="seus-trampos">Seus Trampos </h1>

                     

        <div className="trampos-ativo">
          <div className="serviceNameBox">
            <p>
             {/*  service.nome */}
            </p>
          </div>
          <div className="deleteEditBox">
            <form action="#" method="POST">
              <button className="button-service" type="submit">< AiOutlineDelete className="delete-icon" size={25} /></button>
            </form> 
           <Link to="#">< AiOutlineEdit className="editService" size={25}/></Link>
          </div>
        </div>
      

        
           {/*  <div className="nenhumTrampo-box">
              <p className="nenhumTrampoTxt">Parece que você não tem nenhum trampo ativo ainda</p>
            </div>  */}
        

                    </div>

                    <div className="addTrampoBox">
                       <Link className="add-trampo" to="/profile/addTrampo">Adicionar Trampos</Link>
                    </div>

                </div>

                <div className="perfil-container">

                    <div className="edit-icon">
                       <Link to="/profile/formEdit/">< AiOutlineEdit className="editService" size={25}/></Link>
                    </div>


                    <form action="#" method="POST" encType="multipart/form-data">
                        <div className="foto-container">
                            <img className="imagemUser" src="#" alt="imagem-do-usuario" />
                                <input type="file" style={{display: 'none'}} name="inputAvatar" id="inputAvatar" />
                                    <label className="addFotoTxt" for="inputAvatar">
                                        <p>Adicione uma boa foto de perfil</p>
                                    </label>
                                </div>

                                <div className="enviarBtnBox">
                                    <button className="enviarBtn" type="submit">Salvar</button>
                                </div>
                            </form>


                            <h2 id="nome">
                              {/*   userLogged.nome + ' ' + userLogged.sobrenome */}
                            </h2>
                            <p id="cidade">
                               {/*  userLogged.cidade  */}
                            </p>
                        </div>

                </div>
        </React.Fragment>

    )

}

export default FirstViewPort;