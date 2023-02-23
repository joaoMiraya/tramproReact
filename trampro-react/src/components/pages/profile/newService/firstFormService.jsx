import React from "react";


import '../newService/newService.css'

function FirstForm() {
    return (
        <React.Fragment>
            <div className="subContainer">
                <div className="title box">
                    <div className="text-box">
                        <h1>Seu título</h1>
                        <p>Seu titulo vai ser como as pessoas vão te encontrar, seja claro.</p>
                    </div>
                    <div className="input-box">
                        <input type="text" name="titleInput" className="inputs" id="title-service" placeholder="Defina um titúlo" />
                    </div>
                </div>

                <div className="category box">
                    <div className="text-box">
                        <h1>Selecione uma categoria para seu serviço</h1>
                        <p>Categorias são formas de agrupar serviços para facilitar a busca do usuario</p>
                    </div>
                    <div className="input-box">
                        <input type="text" name="categoryInput" className="inputs" id="category-input" placeholder="Selecione uma categoria" />
                    </div>
                </div>

                <div className="type box">
                    <div className="text-box">
                        <h1>Presencial ou remoto?</h1>
                        <p>Selecione se você pode fazer seu serviço de casa</p>
                    </div>
                    <div className="input box">
                        <input type="text" name="typeInput" className="inputs" id="type-input" placeholder="É presencial ou remoto?" />
                    </div>
                </div>

                <div className="keywords box">
                    <div className="text-box">
                        <h1>Adicione palavras chaves para seu serviço</h1>
                        <p>As palavras chaves facilita ainda mais o usuario de te encontrar, seja especifico</p>
                    </div>
                    <div className="input-box">
                        <textarea name="keywordsInput" className="keywordsInput" id="keywords-input" cols="30" rows="3" placeholder="Adicione até 5 palavras chaves"></textarea>
                    </div>
                </div>

                <div className="description box">
                    <div className="text-box">
                        <h1>Adicione uma descrição para seu serviço</h1>
                        <p>Faça uma descrição detalhada do que você é capaz de fazer</p>
                    </div>
                    <div className="input-box">
                        <textarea name="descriptionInput" className="textArea" id="description-input" cols="30" rows="3" placeholder="Faça uma descrição"></textarea>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}




export default FirstForm;