import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './stylesheets/secondViewPort.css'


import testImage1 from '../../../assets/images/developerimage.jpg'
import testImage2 from '../../../assets/images/foodImage.jpg'
import testImage3 from '../../../assets/images/imagemAtendente..jpg'

function SecondViewPort(props) {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:3002/servicos')
            .then(serviceReturn => serviceReturn.json())
            .then(data => {
                setServices(data)
            })
            .catch(err => console.log(err))
    }, []);
console.log(services)
    useEffect(() => {
        return () => console.log('objeto desmontado')
    }, []);

const breakpoints = {
    1024:{
        slidesPerView: 3,
        spaceBetween:  25
    },
    768:{
        slidesPerView: 2,
        spaceBetween:  1
    },
    640:{
        slidesPerView: 1,
        spaceBetween:  5
    },
    350:{
        slidesPerView: 1,
        spaceBetween:  1
    }
}
   

    return (
        <React.Fragment>

            <h2 className="subtitle-anuncios">Encontre oque você precisa</h2>

            <div className="carouselContainer">
                <div className="carouselBox">
                    <Swiper
                        cssMode={true}
                        breakpoints={breakpoints}
                        slidesPerView={3}
                        spaceBetween={25}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        {services.map((service, id) =>
                        <SwiperSlide key={id}>
                            <div className="slideBox">
                                <div className="nameService">
                                <h3>{service.nome}</h3>
                                </div>
                                <img src={testImage2} width={250} height={250} alt="Imagem" />
                                <div className="textBoxSlide">
                                    <p>{service.descricao}</p>
                                </div>

                            </div>
                        </SwiperSlide>
                        )}


                


                    </Swiper>
                </div>
            </div>

            <h2 className="subtitle-anuncios2">Um país inteiro de trabalhadores
                freelancer ao seu alcance!</h2>
        </React.Fragment>
    )
}


export default SecondViewPort;