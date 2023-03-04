import React from "react";
import { Link } from "react-router-dom";

import './stylesheets/lastComponentHome.css';

import testImage1 from '../../../assets/images/developerimage.jpg';
import testImage2 from '../../../assets/images/foodImage.jpg';
import testImage3 from '../../../assets/images/imagemAtendente..jpg';
import imagePreFooter from '../../../assets/images/modeloSemFundo.png';
import gearImage from '../../../assets/images/gearImage.svg';

function LastComponentHome() {
    
    return (
        <React.Fragment>
            <div className="videoTextFinalHome">
                <div className="videoBox">
                    <iframe id="video1" src="https://player.vimeo.com/video/744249506?h=e0b2b751ad" width="640" height="360"
                        allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div className="info">

                    <div className="textBoxFinalHome">
                        <h1 className="titleTextFinalHome">O melhor para cada orçamento</h1>
                        <p>
                            Encontre serviços de alta qualidade com várias opções de preço.
                            Sem tarifas por hora, preços somente com base em projetos.
                        </p>
                    </div>

                    <div className="textBoxFinalHome">
                        <h1 className="titleTextFinalHome">Trabalho com qualidade e rapidez</h1>
                        <p>
                            Encontre o freelancer certo em poucos minutos
                            para começar a trabalhar no seu projeto.
                        </p>
                    </div>

                    <div className="textBoxFinalHome">
                        <h1 className="titleTextFinalHome">Pagamentos protegidos, sempre</h1>
                        <p>
                            Saiba o valor que você pagará com antecedência.
                            Seu pagamento só será liberado depois que você aprovar o trabalho.
                        </p>
                    </div>

                    <div className="textBoxFinalHome">
                        <h1 className="titleTextFinalHome">Suporte 24/7</h1>
                        <p>
                            Perguntas? Nossa equipe de suporte 24 horas está disponível
                            para ajudar a qualquer hora e em qualquer lugar.
                        </p>
                    </div>

                </div>
            </div>


            <div className="explore-classNamees">
                <div className="nav-explore-servicos">
                    <h1 className="explore-title">Mais procurados:</h1>
                    <Link className="nav-explore" to="/services">Ver mais serviços: </Link>
                </div>
                <div className="classes-servico-box">

                    <div className="classes-servico">
                        <h2 className="servicos-title">Alimentação/Delivery</h2>
                        <div className="classes-image">
                            <Link href="/search?keywords=delivery"><img src={testImage2}
                                alt="serviços de culinaria" /></Link>
                        </div>
                        <div className="descriptionClass">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>

                    <div className="classes-servico">
                        <h2 className="servicos-title">Programação</h2>
                        <div className="classes-image">
                            <Link href="/search?keywords=delivery"><img src={testImage1}
                                alt="serviços de culinaria" /></Link>
                        </div>
                        <div className="descriptionClass">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>

                    <div className="classes-servico">
                        <h2 className="servicos-title">Manutenção</h2>
                        <div className="classes-image">
                            <Link href="/search?keywords=delivery"><img src={testImage3}
                                alt="serviços de culinaria" /></Link>
                        </div>
                        <div className="descriptionClass">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="model-preFooter">

                <div className="textBox-preFooter">
                    <img className="gearImage" src={gearImage} alt="Imagem" width={250} height={250} />
                    <img className="gearImage2" src={gearImage} alt="Imagem" width={250} height={250} />
                    <h1 className="text-preFooter">Encontre a <strong className="engrenagem">engrenagem</strong> que faltava para
                        seu negócio <strong className="girar">girar </strong>!</h1>
                    <a className="btn-preFooter" href="entrar">Começar</a>
                </div>

                <div className="image-preFooter">
                    <img src={imagePreFooter} alt="model" />
                </div>
            </div>
        </React.Fragment>
    )
}


export default LastComponentHome;