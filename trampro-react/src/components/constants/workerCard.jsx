import React from "react";

import { MdOutlineFavorite } from 'react-icons/md'
import devImage from '../../assets/images/developerimage.jpg'
import foodImage from '../../assets/images/foodImage.jpg'

function WorkerCard() {
    return (
        <React.Fragment>
            <div class="workers-card">
                <p class="profissao"> Name of service</p>
                <div class="work-image-box">
                    <img src={devImage} alt="WorkImage" />
                </div>
                <div class="description-worker">
                    <p>Description ahfioahfoiafh</p>
                </div>
                <div class="worker-profile">
                    <div class="worker-imageProfile">
                        <img src={foodImage} alt="Profile" />
                    </div>
                    <div class="worker-name">
                        <a href="#"><h3>Nome do vagabundo </h3></a>
                    </div>
                </div>
                <hr />
                <div class="fav-price-box">
                    <div class="favIcon-box">
                        < MdOutlineFavorite size={25} className="favorite" />
                    </div>
                    <div class="price-box">
                        <h3 class="price">R$ 100,00</h3>
                    </div>
                </div>
                <div class="contratar-box">
                <a href="#">CONTRATAR</a>
            </div>

            </div>
        </React.Fragment>

    )
}


export default WorkerCard;