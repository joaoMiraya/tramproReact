import React from "react";

import InputFinalForm from "./finalFormInput";
import './finalForm.css'
import './newService.css'
function FinalForm() {
    return (
        <React.Fragment >
            <div className="containerFinalForm">

            <div className="containerTextForm">
                    <h2>Agora só falta uma imagem e o preço...</h2>

                    <hr />

                    <div className="serviceReviewBox">
                    <h4>REVISÃO DO SEU SERVIÇO</h4>

                    <label className="labelReviewFinal" for="titleServiceFinal">TÍTULO:</label>
                    <input type="text" name="titleServiceFinal" id="titleServiceFinal" className="inputReviewFinal" />
                    
                    <label className="labelReviewFinal"  for="titleServiceFinal">CATEGORIA:</label>
                    <input type="text" name="titleServiceFinal" id="titleServiceFinal" className="inputReviewFinal" />

                    <label className="labelReviewFinal"  for="titleServiceFinal">ESTILO:</label>
                    <input type="text" name="titleServiceFinal" id="titleServiceFinal" className="inputReviewFinal" />
                    
                    <label className="labelReviewFinal"  for="titleServiceFinal">PALAVRAS-CHAVE:</label>
                    <input type="text" name="titleServiceFinal" id="titleServiceFinal" className="inputReviewFinal" />
                    
                    <label className="labelReviewFinal"  for="titleServiceFinal">DESCRIÇÃO:</label>
                    <input type="text" name="titleServiceFinal" id="titleServiceFinal" className="inputReviewFinal" />
                    </div>
                </div>

                <form action="#" method="POST">
                    <div className="workerBox">
                        <InputFinalForm />
                    </div>

                    </form>

               
            </div>
        </React.Fragment>

    )
}

export default FinalForm;