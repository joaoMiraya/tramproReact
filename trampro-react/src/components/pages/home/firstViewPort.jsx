import React from "react";


import './stylesheets/firstViewPort.css';
import './stylesheets/firstVpMobile.css';
import { Link } from 'react-router-dom';

import textWorkerImage from '../../../assets/images/workerText.png';
import textHirerImage from '../../../assets/images/hirerText.png';

function FirstViewPort() {

    return (

        <React.Fragment>
            <div className="container-desktop">
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={textWorkerImage} className="d-block w-100" alt="Trabalhar" />
                            <div className="carousel-caption d-none d-md-block">
                            <button className="buttonCarousel" type="button">TRABALHAR</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={textHirerImage} className="d-block w-100" alt="Contratar" />
                            <div className="carousel-caption d-none d-md-block">
                                <button className="buttonCarousel" type="button">CONTRATAR</button>
                            </div>
                        </div>
                       
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="fvp-text">

                    <div className="text-1-box">
                        <h2 className="text-1-desktop">
                            Nesse momento <br/>
                                pode ter alguém <br/>
                                    precisando do
                                    <br/> <strong className="seuServico">seu serviço!</strong>
                                    </h2>
                                </div>

                                <div className="text-1-box">
                                    <h2 className="text-2-desktop"> Pare de perder <br/> tempo e mostre
                                        oque <br/> <strong className="fazer">você sabe fazer!</strong>
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            {/* FIRST SECTION MOBILE */}

                            <div className="first-viewport-mobile">
                                <div className="search-container-mobile">
                                    <form action="/search" method="GET">
                                        <div className="search-box-mobile">
                                            <input className="search-text-mobile" name="keywords" type="search" placeholder="Qual serviço está precisando?" />
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
                                            <br /> <strong className="seuServico-mobile">seu serviço!</strong>
                                        </h2>

                                        <h2 className="text-2-mobile"> Pare de perder tempo e mostre
                                            oque <br /> <strong className="fazer-mobile">você sabe fazer!</strong>
                                        </h2>
                                    </div>
                                </div>


                            </div>
                        </React.Fragment>
                        )
}


                        export default FirstViewPort