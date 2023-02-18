import React from "react";
import { Link } from 'react-router-dom';


import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import wave from '../../assets/images/wave.png'
import './stylesheets/footer.css'
import Wave from 'react-wavify'


function Footer() {
    return (
        <React.Fragment>
   <Wave className="wave" fill='#3586ff'
                    paused={false}
                    options={{
                        height: 30,
                        amplitude: 20,
                        speed: 0.15,
                        points: 4
                    }}
                />
            <footer>
                <ul className="socialIcons">
                    <li><Link to="/"> <BsFacebook color="white" size={25} /> </Link></li>
                    <li><Link to="/"> <BsLinkedin color="white" size={25} /> </Link></li>
                    <li><Link to="/"> <BsInstagram color="white" size={25} /> </Link></li>
                    <li><Link to="/"> <BsTwitter color="white" size={25} />   </Link></li>
                </ul>

                <ul className="menu">
                    <li><Link className="menuLi" to="/" >Home</Link></li>
                    <li><Link className="menuLi" to="/" >Sobre</Link></li>
                    <li><Link className="menuLi" to="/" >Contato</Link></li>
                    <li><Link className="menuLi" to="/" >Dúvidas</Link></li>
                </ul>

                <p>©TramPro | Todos Direitos Reservados</p>

            </footer>

        </React.Fragment>
    )
}


export default Footer