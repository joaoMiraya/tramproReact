import React from "react";

import './stylesheets/error.css';
import { Link } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";

function ErrorPage() {
    return (
        <React.Fragment>
            <body className="errorBody">
                <Header />
                <div className="containerError">
                <div className="erroBox">
                    <h1>Parece que você está perdido!</h1>
                    <Link className="linkError" to={'/'}> Clique aqui para voltar ao inicio</Link>
                </div>
                </div>
                <Footer />
            </body>

        </React.Fragment>
    )
}


export default ErrorPage