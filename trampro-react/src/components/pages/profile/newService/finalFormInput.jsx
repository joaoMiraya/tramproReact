import React from "react";

import './finalForm.css'

import { MdOutlineFavorite } from 'react-icons/md'
import { AiOutlineCamera } from 'react-icons/ai'

function InputFinalForm() {
    return (
        <React.Fragment>
            <div class="workers-cardform">
                <p class="profissaoform"> Name of service</p>
                <div class="work-image-boxform">
                    <input className="inputPhotoForm" type="file" id="serviceImage" name="serviceImage" />
                    <label for="serviceImage"><AiOutlineCamera size={100} /></label>
                </div>
                <div class="description-workerform">
                    <p>Lorem Ipsum is simply dummy text. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                </div>
                <div class="worker-profileform">
                    <div class="worker-imageProfileform">
                        <img src='#' alt="Profile" />
                    </div>
                    <div class="worker-nameform">
                        <h3>Nome do vagabundo </h3>
                    </div>
                </div>
                <hr />
                <div class="fav-price-boxform">
                    <div class="favIcon-boxform">
                        < MdOutlineFavorite size={25} className="favoriteform" />
                    </div>
                    <div class="price-boxform">
                        <input type="text" name="priceForm" id="priceForm" placeholder="R$" />
                    </div>
                </div>
                <div class="contratar-boxform">
                    <a href="#">CONTRATAR</a>
                </div>
            </div>
        </React.Fragment>
    )
}


export default InputFinalForm;