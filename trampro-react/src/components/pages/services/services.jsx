import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaHeart } from 'react-icons/fa';
import './stylesheets/services.css'
import axios from "axios";

function Services(props) {
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002/servicos')
            .then(serviceReturn => serviceReturn.json())
            .then(data => {
                setServices(data)
            })
            .catch(err => console.log(err))
    }, []);
console.log(services)
    useEffect(() => {
        return () => console.log('objeto desmontado')
    }, [])

    return (
        <React.Fragment>
                <div className="anuncios-container">
                    <div className="title-anuncios">
                        <h3>Conheça os profissionais disponíveis: </h3>

                    </div>
                    {services.map((service, id) =>
                    <div className="workers-card"  key={id}>
                        <p className="profissao">
                            {service.titulo }
                        </p>
                        <div className="work-image-box">
                            <img src="" alt="WorkImage" />
                        </div>
                        <div className="description-worker">
                            <p>
                                {service.descricao}
                            </p>
                        </div>
                        <div className="worker-profile">
                            <div className="worker-imageProfile">
                                <img src="" alt="Profile" />
                            </div>
                            <div className="worker-name">
                                <Link href="">
                                    <h3>
                                        {service.Usuario.nome + ' ' + service.Usuario.sobrenome }
                                    </h3>
                                </Link>
                            </div>
                        </div>
                        <hr />
                        <div className="fav-price-box">
                            <div className="favIcon-box">
                                <FaHeart className="favorite" size={20} />
                            </div>
                            <div className="price-box">
                                <h3 className="price">
                                    {'R$' + service.valor + ',00'}
                                </h3>
                            </div>
                        </div>
                        <a href="/pagamento/detail/<%= service.id %>">
                            <div className="contratar-box contratar-btn">Contratar</div>
                        </a>
                    </div>
                       )}
                </div>
         
        </React.Fragment>

    )

}

export default Services;