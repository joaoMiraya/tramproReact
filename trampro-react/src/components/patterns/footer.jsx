import React from "react";
import { Link } from 'react-router-dom';


import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import './stylesheets/footer.css'
import Wave from 'react-wavify'


function Footer() { 
    return (
        <React.Fragment>
< Wave className="wave"  mask = "url(#mask)"  fill = "#06293D"  > 
  < defs > 
    < linearGradient  id = "gradient"  gradientTransform = "rotate(90)" > 
      <stop  offset = "0.2"  stopColor = "#1277b0"  /> 
      <stop  offset = "0"  stopColor = "#D5F4FF"  /> 
    </ linearGradient > 
    <mask id="mask"> 
      < rect  x = "0"  y = "0"  width = "100%"  height = "110%"  fill = "url(#gradient)"   /> 
      </mask>
  </defs>
</Wave>

            <footer>
                <ul className="socialIcons">
                    <li><Link to="/"> <BsFacebook color="#fff" size={25} /> </Link></li>
                    <li><Link to="/"> <BsLinkedin color="#fff" size={25} /> </Link></li>
                    <li><Link to="/"> <BsInstagram color="#fff" size={25} /> </Link></li>
                    <li><Link to="/"> <BsTwitter color="#fff" size={25} />   </Link></li>
                </ul>

                <ul className="menu" >
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