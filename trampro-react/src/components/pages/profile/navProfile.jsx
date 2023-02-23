import React from "react";
import './stylesheets/profile.css'

import { FiLogOut } from 'react-icons/fi';
import { Link } from "react-router-dom";


function NavProfile() {
    return (
        <React.Fragment>

            <div className="nav-profile-container">
               
                    <Link className="btn-trocarAcc" to="/profileContratante">Trocar Contratante</Link>
               

                <div className="logoutBox">
                    <Link to="/profile/logout"><FiLogOut className="logout" size={25} /></Link>
                </div>
            </div>

        </React.Fragment>

    )

}

export default NavProfile;