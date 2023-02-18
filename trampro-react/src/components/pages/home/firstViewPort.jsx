import React from "react"
import './stylesheets/firstViewPort.css'
import './stylesheets/firstVpMobile.css'
import { Link } from 'react-router-dom';

function FirstViewPort() {
    return (

        <React.Fragment>
            <div className="container-desktop">

                <div className="contentSlides">
                    <div className="slide-1">
                        <div id="txtSlide1" className="slide s1">
                            <h3 className="contratar txtBtn">Você pode <br /> contratar alguem <br /> para o seu negócio</h3>
                            <div className="contratarBtnBox">
                               <Link to="/servico" className="carrosselBtn">Contratar</Link>
                            </div>
                        </div>
                    </div>

                    <div className="slide-2">
                        <div id="txtSlide2" className="slide" style={{ visibility: 'hidden' }}>
                            <h3 className="trabalhar txtBtn">Você pode<br />procurar trabalhos <br /> para sair do aperto</h3>
                            <div className="trabalharBtnBox">
                               <Link to="/profile/addTrampo" className="carrosselBtn">Trampar</Link>
                            </div>
                        </div>

                        <div className="slide-label">
                            <label id="btn1" className="bar-slide bs1" for="slide1"></label>
                            <label id="btn2" className="bar-slide bs2" for="slide2"></label>
                        </div>
                    </div>
                    <input className="input-slide" type="radio" name="slide" id="slide1" checked />
                    <input className="input-slide" type="radio" name="slide" id="slide2" />
                </div>

                <div className="fvp-text">

                    <div className="text-1-box">
                        <h2 className="text-1-desktop">
                            Nesse momento   <br />
                            pode ter alguém <br />
                            precisando do
                            <br /> <strong className="seuServico">seu serviço!</strong>
                        </h2>
                    </div>

                    <div className="text-1-box">
                        <h2 className="text-2-desktop"> Pare de perder <br /> tempo e mostre
                            oque <br /> <strong className="fazer">você sabe fazer!</strong>
                        </h2>
                    </div>
                </div>
            </div>

            {/* FIRST SECTION MOBILE */}

            <div className="first-viewport-mobile">
                <div className="search-container-mobile">
                    <form action="/search" method="GET">
                        <div className="search-box-mobile">
                            <input className="search-text-mobile" name="keywords" type="search" placeholder="Qual serviço está precisando?"/>
                        </div>
                        <div className="pesquisar-btn">
                            <button type="submit" className="search-btnMobile">Pesquisar</button>
                        </div>
                    </form>
                </div>

                <div className="container-main-mobile">

                    <div className="text-area-main-mobile">
                        <h2 className="text-1-mobile">
                            Nesse momento
                            pode ter alguém
                            precisando do
                            <br/> <strong className="seuServico-mobile">seu serviço!</strong>
                        </h2>

                        <h2 className="text-2-mobile"> Pare de perder tempo e mostre
                            oque <br/> <strong className="fazer-mobile">você sabe fazer!</strong>
                        </h2>
                    </div>
                </div>


            </div>
        </React.Fragment>
    )
}


export default FirstViewPort