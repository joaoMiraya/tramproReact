import React from "react";

import '../newService/newService.css'
import FirstForm from "./firstFormService";
import FinalForm from "./finalFormService";

import { useForm } from "../../../../assets/hooks/useForm";

function NewService() {
    const formComponents = [<FirstForm />, <FinalForm />];

    const { currentStep, currentComponent, changeStep, islastStep, isFirstStep } = useForm(formComponents)

    function saveData() {
        let service = {
            presencialOuRemoto: req.body.typeInput,
            nome: req.body.titleInput,
            valor: req.body,
            classe: req.body.categoryInput,
            descricao: req.body.descriptionInput,
            imagem: req.body

        }
    }

    return (
        <React.Fragment>
            <div className="container-main">
                <form action="#" method="POST" onSubmit={(e) => changeStep(currentStep + 1, e)}>
                    {currentComponent}
                        
                    <div className="button-box">
                        {!isFirstStep && (
                            <button className="save-btn" onClick={() => changeStep(currentStep - 1)}
                                type="button">VOLTAR</button>
                        )}

                        {!islastStep ? (
                            <button className="save-btn" type="submit">Salvar e Continuar</button>
                        ) : (
                            <button className="save-btn" type="submit">ENVIAR</button>
                        )}
                    </div>

                </form>
            </div>


        </React.Fragment>
    )
}



export default NewService;